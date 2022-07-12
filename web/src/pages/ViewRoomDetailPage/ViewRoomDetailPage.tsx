import React, { Fragment, useEffect, useState } from 'react'
import Button from '../../components/RateFolder/Button'
import { HiOutlinePlus, HiOutlineX } from "react-icons/hi";
import { StarRating } from '../../components/RateFolder/StarRating';
import Link from 'antd/lib/typography/Link';
import ItemReview from '../../components/RateFolder/ItemReview';
import { Dialog, Transition } from '@headlessui/react';
import Rating from '../../components/RateFolder/Rating';
import { Form, Formik } from 'formik';
import FormTextArea from '../../components/RateFolder/FormTextArea';
import { useAddRoomToFavouriteMutation, useCheckRoomFavouritedQuery, useRemoveRoomFromFavouritesMutation, useRoomQuery } from 'src/generated/graphql';
import LoadingComponent from 'src/helper/LoadingComponent';
import { Image } from "antd";
// import Breadcrumb from 'src/components/RateFolder/Breadcrumb';
import { Row } from 'src/components/RateFolder/Grid';
import Tag from 'src/components/RateFolder/Tag';
import CustomSlider from 'src/components/RateFolder/CustomSlider';
import { MdImageNotSupported } from "react-icons/md";
import RoomCart from 'src/components/RateFolder/RoomCart';
import ItemComment from 'src/components/RateFolder/ItemComment';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import ReactPagination from 'src/components/RateFolder/ReactPagination';
import Profiles from 'src/components/RateFolder/Profiles';
// import { Head } from '@redwoodjs/web';

type RoomDetailProps = { id: string; title: string }
export default function ViewRoomDetailPage({ id }: RoomDetailProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
	const [rating, setRating] = useState(0);
	const [isOpenDescription, setIsOpenDescription] = useState(false);

  const [addToFavourite, { loading: _addToFavouriteLoading }] = useAddRoomToFavouriteMutation()
  const [removefromFavourite, { loading: _removefromFavouriteLoading }] = useRemoveRoomFromFavouritesMutation()

  const { data, loading, error } = useRoomQuery({
    variables: {
      roomId: id,
    },
  })
  const CheckRoomFavourited = useCheckRoomFavouritedQuery({
    variables: {
      roomId: id,
    },
  })
  useEffect(() => {
    if (CheckRoomFavourited.data) {
      setIsFavourite(CheckRoomFavourited.data?.isRoomFavourited)
    }
  }, [CheckRoomFavourited.data])


  if (loading) {
    return <LoadingComponent />
  } else {
    if (error) {
      console.log(error)
    }
    console.log(data)
  }



	return (
		<>
      {/* <Head>
        <title>Chi tiết dịch vụ</title>
    </Head> */}
      {/* <Breadcrumb
        location={[
            {
                name: "Dịch vụ",
                path: "/rooms",
            },
            {
                name: data.room.room.title,
                active: true,
            },
        ]}
    /> */}
      <div className="-mt-5" style={{ position:"relative", marginTop: "1.25rem" }}>
      <div className="container">
        <Row>
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-wrap gap-2">
              <Tag color="yellow">
                {data.room.room.province.name}
              </Tag>
              <Tag color="yellow">
                {data.room.room.district.name}
              </Tag>
              <Tag color="yellow">
                {data.room.room.ward.full_name}
              </Tag>
            </div>
            <p className="text-[1.625rem] text-neutral-100 font-semibold">
              {data.room.room.title}
            </p>
            <div className="w-full mt-8">
              <CustomSlider
                settings={{
                  dots: true,
                  arrows: true,
                  slidesToShow: 1,
                  infinite: true,
                  slidesToScroll: 1,
                  dotsClass: "custom-slick-dots",
                  speed: 500,
                  customPaging: (i) => data.room.room.images?.length > 0 ? (
                    <span className="cursor-pointer">
                      <Image
                        src={data.room.room.images[i].imageUrl}
                        alt="media"
                        width={72}
                        height={72}
                        preview={false} />
                    </span>
                  ) : (
                    <span className="cursor-pointer">
                      <div className="w-16 h-16 flex items-center justify-center bg-slate-700"></div>
                    </span>
                  ),
                }}>
                {data.room.room.images?.length > 0 ? (
                  data.room.room.images.map((img, index) => (
                    <div key={index}>
                      <Image
                        src={img.imageUrl}
                        alt="media"
                        width={"100%"}
                        height={"100%"}
                         />
                    </div>
                  ))
                ) : (
                  <div>
                    <div className="w-full aspect-w-1 aspect-h-1 flex items-center justify-center bg-slate-700">
                      <MdImageNotSupported className="text-neutral-20 w-16 h-16 mx-auto my-auto" />
                    </div>
                  </div>
                )}
              </CustomSlider>
            </div>
            <div className="w-full mt-24">
              <p className="text-2xl font-semibold">
                Giới thiệu chung:
              </p>
              <div className="bg-grey p-6 flex flex-col gap-2 ">
                <div className="font-normal text-base">
                  {data.room.room.description}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="mb-8">
              <RoomCart data={data} addToFavourite={addToFavourite} isFavourite={isFavourite} removefromFavourite={removefromFavourite} />
            </div>
            <div className="mt-8">
              <Profiles name={data.room.room.owner.fullName} linkAvt={data.room.room.owner.avatarUrl} isUserView={true} rating={4} numEvaluation={2} phoneNumber={data.room.room.owner.phoneNumber} />
            </div>
          </div>
        </Row>
        <Row>
          <div className="mt-[6.75rem] col-span-12 lg:col-span-8">
            <p className="text-2xl font-semibold">
              Một số đánh giá từ người dùng
            </p>
            <div className="mt-4">
              <CustomSlider
                settings={{
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                }}>
                <ItemComment
                  comment={'"Chủ Phòng rất tận tâm và hiệu quả, và các chi tiết trong quá trình trang trí rất tốt. Anh ấy đã cho chúng tôi rất nhiều gợi ý có giá trị để trang trí nhà cửa. Chúng tôi rất hài lòng và đội ngũ rất chuyên nghiệp và có trách nhiệm, rất đáng để giới thiệu ! "'}
                  name="Nguyễn Văn A"
                  rating={4} />
                <ItemComment
                  comment={'"Chủ Phòng rất tận tâm và hiệu quả, và các chi tiết trong quá trình trang trí rất tốt. Anh ấy đã cho chúng tôi rất nhiều gợi ý có giá trị để trang trí nhà cửa. Chúng tôi rất hài lòng và đội ngũ rất chuyên nghiệp và có trách nhiệm, rất đáng để giới thiệu ! "'}
                  name="Nguyễn Văn A"
                  rating={4} />
              </CustomSlider>
            </div>
            <div className="mt-9">
              <p className="text-2xl font-semibold">Mô tả</p>
              <div className="mt-4">
                <p
                  className={`text-base ${isOpenDescription ? "" : "line-clamp-2"} font-normal text-neutral-80`}>
                  {data.room.room.description}
                </p>
                {!isOpenDescription ? (
                  <div
                    className="cursor-pointer flex items-center mt-4 text-base font-normal text-status-blue"
                    onClick={() => setIsOpenDescription(true)}>
                    <FaAngleDown className="text-2xl" />
                    Xem thêm
                  </div>
                ) : (
                  <div
                    className="cursor-pointer flex items-center mt-4 text-base font-normal text-status-blue"
                    onClick={() => setIsOpenDescription(false)}>
                    <FaAngleUp className="text-2xl" />
                    Thu gọn
                  </div>
                )}
              </div>
              <div className="mt-9">
                <div className="flex justify-between">
                  <span className="text-2xl font-semibold">
                    Đánh giá người dùng
                  </span>
                  <Button
                    md
                    onClick={() => setIsOpen(true)}
                    className="text-neutral-100 border">
                    <HiOutlinePlus className="mr-1" />
                    Viết đánh giá
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-neutral-100">
                    {data.room.room.rate}
                  </span>
                  <span>
                    <StarRating rating={data.room.room.rate} />
                  </span>
                  <span className="text-neutral-60 text-sm">
                    Dựa trên {10} đánh
                    giá
                  </span>
                  <span className="text-status-blue text-sm">
                    <Link href="/">
                      Chi tiết
                    </Link>
                  </span>
                </div>
                <div className="mt-4 border-t">
                  <div className="flex flex-col">
                    <div>
                      <ItemReview />
                    </div>
                    <div>
                      <ItemReview />
                    </div>
                    <div>
                      <ItemReview />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ReactPagination
              pageCount={10}
              initialPage={1}
              onPageChange={(page) => {
                console.log(page);
              } } />
          </div>
        </Row>
      </div>
      <Transition show={isOpen}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="z-10 relative">
          <Transition.Child>
            <div className="flex inset-0 fixed bg-black opacity-50"></div>
          </Transition.Child>
          <Transition.Child as={Fragment}>
            <div className="flex items-center fixed inset-0 justify-center">
              <div className="bg-white rounded-lg p-6 shadow-lg overflow-hidden">
                <Dialog.Panel>
                  <Dialog.Title>
                    <div
                      className="flex items-center"
                      role="button"
                      onClick={() => setIsOpen(false)}>
                      <div className="w-9 h-9 ml-auto rounded-full flex items-center justify-center shadow">
                        <HiOutlineX size={24} />
                      </div>
                    </div>
                    <div className="text-center body-1-semibold">
                      Đánh giá dịch vụ
                    </div>
                  </Dialog.Title>
                  <Dialog.Description>
                    <div className="flex flex-col divide-y divide-1-grey">
                      <div className="py-8">
                        <div className="h-[38px] w-full flex">
                          <div className="mr-2">
                            <Image
                              src={"/work.jpg"}
                              alt="media"
                              className="rounded-full"
                              width={"48px"}
                              height={"48px"} />
                          </div>
                          <div>
                            <p className="body-4-semibold m-0">
                              {data.room?.room?.owner?.id ||
                                ""}
                            </p>
                            <span className="text-center p-1 text-[10px] bg-gradient-to-r from-[#FF4D97] to-[#FF9500] text-white rounded-tl-lg rounded-br-lg">
                              TOP RATE
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center py-4">
                        <div>Dịch vụ</div>
                        <div className="ml-auto body-5-semibold text-neutral-100">
                          {data.room.room.title || ""}
                        </div>
                      </div>
                      <div className="flex items-center py-4">
                        <div>Đánh giá</div>
                        <div className="ml-auto">
                          <Rating
                            value={rating}
                            onChange={(value) => {
                              setRating(value);
                            } } />
                        </div>
                      </div>
                      <div className="py-4">
                        <Formik
                          initialValues={{
                            rating: 0,
                            comment: "",
                          }}
                          onSubmit={(values) => {
                            console.log(values);
                          } }>
                          {(props) => (
                            <Form>
                              <label>
                                Nhận xét dịch vụ
                              </label>
                              <FormTextArea
                                rows={4}
                                name="comment"
                                className="border p-4 w-full"
                                placeholder="Nhập mô tả dịch vụ"
                                maxLength={500} />
                              <p className="flex justify-between text-sm text-neutral-60">
                                <span>
                                  Tối đa 500
                                  ký tự{" "}
                                </span>
                                <span>
                                  {props
                                    .values
                                    .comment
                                    .length}
                                  /500
                                </span>
                              </p>
                              <Button
                                md
                                type="submit"
                                primary
                                block
                                className="mt-4">
                                Hoàn thành
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </Dialog.Description>
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>;
	</>
	);
}

