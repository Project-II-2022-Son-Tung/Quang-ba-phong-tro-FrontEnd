import React, { Fragment, useEffect, useState } from 'react'
import Button from '../../components/RateFolder/Button'
import { HiOutlinePlus, HiOutlineX } from 'react-icons/hi'
import { StarRating } from '../../components/RateFolder/StarRating'
import Link from 'antd/lib/typography/Link'
import ItemReview from '../../components/RateFolder/ItemReview'
import { Dialog, Transition } from '@headlessui/react'
import Rating from '../../components/RateFolder/Rating'
import { Form, Formik } from 'formik'
import FormTextArea from '../../components/RateFolder/FormTextArea'
import UserFavouritedList from './component/UserFavouritedList'
import {
  useAddRoomToFavouriteMutation,
  useCheckRoomFavouritedQuery,
  useCreateRoomRateMutation,
  useGetUsersFavouritedQuery,
  useMyRoomRateQuery,
  useRemoveRoomFromFavouritesMutation,
  useRoomQuery,
  useUpdateRoomRateMutation,
} from 'src/generated/graphql'
import LoadingComponent from 'src/helper/MessageComponent'
import { Image } from 'antd'
// import Breadcrumb from 'src/components/RateFolder/Breadcrumb';
import { Row } from 'src/components/RateFolder/Grid'
import Tag from 'src/components/RateFolder/Tag'
import CustomSlider from 'src/components/RateFolder/CustomSlider'
import { MdImageNotSupported } from 'react-icons/md'
import RoomCart from 'src/components/RateFolder/RoomCart'
import ItemComment from 'src/components/RateFolder/ItemComment'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import ReactPagination from 'src/components/RateFolder/ReactPagination'
import Profiles from 'src/components/RateFolder/Profiles'
import { border, margin } from '@mui/system'
// import { Head } from '@redwoodjs/web';

type RoomDetailProps = { id: string; title: string }
export default function OwnerViewRoomDetailPage({ id }: RoomDetailProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isUpdateOpen, setIsUpdateOpen] = useState(false)
  const [isFavourite, setIsFavourite] = useState(false)
  const [rating, setRating] = useState(0)
  const [isOpenDescription, setIsOpenDescription] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [selectedImages, setSelectedImages] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [addToFavourite, { loading: _addToFavouriteLoading }] =
    useAddRoomToFavouriteMutation()
  const [removefromFavourite, { loading: _removefromFavouriteLoading }] =
    useRemoveRoomFromFavouritesMutation()
  const [createRoomRate, { loading: _createRoomRateLoading }] =
    useCreateRoomRateMutation()
  const [updateRoomRate, { loading: _updateRoomRateLoading }] =
    useUpdateRoomRateMutation()

  const { data: data_rate, loading: data_rate_loading } = useMyRoomRateQuery({
    variables: {
      roomId: id,
    },
  })

  const { data: data_user, loading: data_user_loading } = useGetUsersFavouritedQuery({
    variables: {
      roomId: id,
    },
  })

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

  if (loading || data_rate_loading || data_user_loading) {
    return <LoadingComponent />
  } else {
    if (error) {
      console.log(error)
    }

    console.log(data_user)
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
      <div
        className="-mt-5"
        style={{ position: 'relative', marginTop: '1.25rem' }}
      >
        <div className="container">
          <Row>
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-wrap gap-2">
                <Tag color="yellow">{data.room.room.province.name}</Tag>
                <Tag color="yellow">{data.room.room.district.full_name}</Tag>
                <Tag color="yellow">{data.room.room.ward.full_name}</Tag>
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
                    dotsClass: 'custom-slick-dots',
                    speed: 500,
                    customPaging: (i) =>
                      data.room.room.images?.length > 0 ? (
                        <span className="cursor-pointer">
                          <Image
                            src={data.room.room.images[i].imageUrl}
                            alt="media"
                            width={72}
                            height={72}
                            preview={false}
                          />
                        </span>
                      ) : (
                        <span className="cursor-pointer">
                          <div className="w-16 h-16 flex items-center justify-center bg-slate-700"></div>
                        </span>
                      ),
                  }}
                >
                  {data.room.room.images?.length > 0 ? (
                    data.room.room.images.map((img, index) => (
                      <div key={index}>
                        <Image
                          src={img.imageUrl}
                          alt="media"
                          width={'100%'}
                          height={'100%'}
                          style={{ maxHeight: '800px', objectFit: 'cover' }}
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
              {/* <div className="w-full mt-24">
              <p className="text-2xl font-semibold">
                Giới thiệu chung:
              </p>
              <div className="bg-grey p-6 flex flex-col gap-2 ">
                <div className="font-normal text-base">
                  {data.room.room.description}
                </div>
              </div>
            </div> */}
              <div className="w-full mt-24">
                <p className="text-2xl font-semibold">Mô tả</p>
                <div className="mt-4">
                  <p
                    className={`text-base ${
                      isOpenDescription ? '' : 'line-clamp-2'
                    } font-normal text-neutral-80`}
                  >
                    {data.room.room.description}
                  </p>
                  {!isOpenDescription ? (
                    <div
                      className="cursor-pointer flex items-center mt-4 text-base font-normal text-status-blue"
                      onClick={() => setIsOpenDescription(true)}
                    >
                      <FaAngleDown className="text-2xl" />
                      Xem thêm
                    </div>
                  ) : (
                    <div
                      className="cursor-pointer flex items-center mt-4 text-base font-normal text-status-blue"
                      onClick={() => setIsOpenDescription(false)}
                    >
                      <FaAngleUp className="text-2xl" />
                      Thu gọn
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="mb-8">
                <RoomCart
                  data={data}
                  addToFavourite={addToFavourite}
                  isFavourite={isFavourite}
                  removefromFavourite={removefromFavourite}
                />
              </div>
              <div className="mt-8">
                <Profiles
                  name={data.room.room.owner.fullName}
                  linkAvt={data.room.room.owner.avatarUrl}
                  isUserView={true}
                  numEvaluation={data.room.room.owner.numberOfRates}
                  phoneNumber={data.room.room.owner.phoneNumber}
                  rating={data.room.room.owner.rate}
                />
              </div>
            </div>
          </Row>
          <Row>
            <div className="mt-[6.75rem] col-span-12 lg:col-span-8">
              <p className="text-2xl font-semibold">
                Một số đánh giá từ người dùng
              </p>
              {data.room.room.rates.length > 1 && (
                <div className="mt-4">
                  <CustomSlider
                    settings={{
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: true,
                    }}
                  >
                    <ItemComment
                      comment={data.room.room.rates[0].comment}
                      name={data.room.room.rates[0].user.fullName}
                      avatar={data.room.room.rates[0].user.avatarUrl}
                      rating={data.room.room.rates[0].rate}
                    />
                    <ItemComment
                      comment={data.room.room.rates[1].comment}
                      name={data.room.room.rates[1].user.fullName}
                      avatar={data.room.room.rates[1].user.avatarUrl}
                      rating={data.room.room.rates[1].rate}
                    />
                  </CustomSlider>
                </div>
              )}
              <div className="mt-9">
                <div className="mt-9">
                  <div className="flex justify-between">
                    <span className="text-2xl font-semibold">
                      Đánh giá người dùng
                    </span>
                    <Button
                      md
                      onClick={() => setIsOpen(true)}
                      className="text-neutral-100 border"
                    >
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
                      Dựa trên {data.room.room.numberOfRates} đánh giá
                    </span>
                    <span className="text-status-blue text-sm">
                      <Link href="/">Chi tiết</Link>
                    </span>
                  </div>
                  <div className="mt-4 border-t">
                    <div className="flex flex-col">
                      {data.room.room.rates.map((rate, index) => {
                        return (
                          <div key={index}>
                            <ItemReview
                              rate={rate.rate}
                              comment={rate.comment}
                              user={rate.user}
                              images={rate.images}
                              createdDate={rate.createdAt}
                              id={rate.id}
                              isEditable={rate.id == data_rate.myRoomRate.id}
                              openEdit={setIsUpdateOpen}
                            />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <ReactPagination
                pageCount={10}
                initialPage={1}
                onPageChange={(page) => {
                  console.log(page)
                }}
              />
              <UserFavouritedList  roomId={id} data={data_user}/>
            </div>
          </Row>
        </div>
        <Transition show={isOpen}>
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="z-10 relative"
          >
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
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-9 h-9 ml-auto rounded-full flex items-center justify-center shadow">
                          <HiOutlineX size={24} />
                        </div>
                      </div>
                      <div className="text-center body-1-semibold">
                        Đánh giá phòng
                      </div>
                    </Dialog.Title>
                    <Dialog.Description>
                      <div className="flex flex-col divide-y divide-1-grey">
                        <div className="py-8">
                          <div className="h-[38px] w-full flex">
                            <div className="mr-2">
                              <Image
                                src={data.room.room.owner.avatarUrl}
                                alt="media"
                                className="rounded-full"
                                width={'48px'}
                                height={'48px'}
                                preview={false}
                              />
                            </div>
                            <div>
                              <p className="body-4-semibold m-0">
                                {data.room?.room?.owner?.fullName || ''}
                              </p>
                              <span className="text-center p-1 text-[10px] bg-gradient-to-r from-[#FF4D97] to-[#FF9500] text-white rounded-tl-lg rounded-br-lg">
                                TOP RATE
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center py-4">
                          <div style={{ marginRight: '0.5vw' }}>Tên phòng</div>
                          <div className="ml-auto body-5-semibold text-neutral-100">
                            {data.room.room.title || ''}
                          </div>
                        </div>
                        <div className="flex items-center py-4">
                          <div>Đánh giá</div>
                          <div className="ml-auto">
                            <Rating
                              value={rating}
                              onChange={(value) => {
                                setRating(value)
                              }}
                            />
                          </div>
                        </div>
                        <div className="py-4">
                          <Formik
                            initialValues={{
                              rating: 0,
                              comment: '',
                            }}
                            onSubmit={async (values) => {
                              let uploadedFiles: string[] = []
                              selectedFiles.forEach(async (file) => {
                                let formData = new FormData()
                                formData.append('file', file)
                                fetch(
                                  process.env.BACKEND_URL + '/uploadImages',
                                  {
                                    method: 'POST',
                                    body: formData,
                                  }
                                )
                                  .then((response) => response.text())
                                  .then((result) => {
                                    uploadedFiles.push(result)
                                  })
                                  .catch((error) => console.log('error', error))
                              })
                              while (
                                uploadedFiles.length < selectedFiles.length
                              ) {
                                await new Promise((resolve) =>
                                  setTimeout(resolve, 100)
                                )
                              }

                              createRoomRate({
                                variables: {
                                  rateInput: {
                                    roomId: data.room.room.id,
                                    rate: rating,
                                    comment: values.comment,
                                    images: uploadedFiles,
                                  },
                                },
                              })
                                .then((response) => {
                                  console.log(response)
                                  setIsSubmitted(true)
                                  uploadedFiles = []
                                })
                                .catch((error) => {
                                  console.log(JSON.stringify(error))
                                })
                              setSelectedFiles([])
                              setRating(0)
                              setSelectedImages([])
                            }}
                          >
                            {(props) => (
                              <Form>
                                <div className="flex flex-col divide-y divide-1-grey">
                                  <label htmlFor="file">Thêm ảnh</label>
                                  <input
                                    id="file"
                                    name="file"
                                    type="file"
                                    accept="image/*"
                                    onChange={(event) => {
                                      setSelectedFiles([
                                        ...selectedFiles,
                                        event.currentTarget.files[0],
                                      ])
                                      setSelectedImages([
                                        ...selectedImages,
                                        URL.createObjectURL(
                                          event.currentTarget.files[0]
                                        ),
                                      ])
                                    }}
                                    className="form-control"
                                    style={{ marginTop: '1vh' }}
                                  />
                                  <div
                                    className="multi-preview"
                                    style={{ marginTop: '1vh' }}
                                  >
                                    {selectedImages.map((image) => (
                                      <div
                                        key={image[0]}
                                        style={{
                                          float: 'left',
                                          marginTop: '1vh',
                                          marginRight: '10px',
                                        }}
                                      >
                                        <img
                                          src={image}
                                          style={{
                                            maxWidth: '10vw',
                                            maxHeight: '10vh',
                                          }}
                                          alt={'hinh anh nhan xet'}
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <label>Nhận xét phòng</label>
                                <FormTextArea
                                  rows={4}
                                  name="comment"
                                  className="border p-4 w-full"
                                  placeholder="Nhập mô tả nhận xét về phòng"
                                  maxLength={500}
                                />
                                <div className="flex justify-between text-sm text-neutral-60">
                                  <span>Tối đa 500 ký tự </span>
                                  <span>
                                    {props.values.comment.length}
                                    /500
                                  </span>
                                </div>
                                <Button
                                  md
                                  type="submit"
                                  primary
                                  block
                                  className="mt-4"
                                >
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
        <Transition show={isUpdateOpen}>
          <Dialog
            open={isUpdateOpen}
            onClose={() => setIsUpdateOpen(false)}
            className="z-10 relative"
          >
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
                        onClick={() => setIsUpdateOpen(false)}
                      >
                        <div className="w-9 h-9 ml-auto rounded-full flex items-center justify-center shadow">
                          <HiOutlineX size={24} />
                        </div>
                      </div>
                      <div className="text-center body-1-semibold">
                        Sửa đánh giá phòng
                      </div>
                    </Dialog.Title>
                    <Dialog.Description>
                      <div className="flex flex-col divide-y divide-1-grey">
                        <div className="py-8">
                          <div className="h-[38px] w-full flex">
                            <div className="mr-2">
                              <Image
                                src={data.room.room.owner.avatarUrl}
                                alt="media"
                                className="rounded-full"
                                width={'48px'}
                                height={'48px'}
                                preview={false}
                              />
                            </div>
                            <div>
                              <p className="body-4-semibold m-0">
                                {data.room?.room?.owner?.fullName || ''}
                              </p>
                              <span className="text-center p-1 text-[10px] bg-gradient-to-r from-[#FF4D97] to-[#FF9500] text-white rounded-tl-lg rounded-br-lg">
                                TOP RATE
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center py-4">
                          <div style={{ marginRight: '0.5vw' }}>Tên phòng</div>
                          <div className="ml-auto body-5-semibold text-neutral-100">
                            {data.room.room.title || ''}
                          </div>
                        </div>
                        <div className="flex items-center py-4">
                          <div>Đánh giá mới</div>
                          <div className="ml-auto">
                            <Rating
                              value={rating}
                              onChange={(value) => {
                                setRating(value)
                              }}
                            />
                          </div>
                        </div>
                        <div className="py-4">
                          <Formik
                            initialValues={{
                              rating: 0,
                              comment: '',
                            }}
                            onSubmit={async (values) => {
                              let uploadedFiles: string[] = []
                              selectedFiles.forEach(async (file) => {
                                let formData = new FormData()
                                formData.append('file', file)
                                fetch(
                                  process.env.BACKEND_URL + '/uploadImages',
                                  {
                                    method: 'POST',
                                    body: formData,
                                  }
                                )
                                  .then((response) => response.text())
                                  .then((result) => {
                                    uploadedFiles.push(result)
                                  })
                                  .catch((error) => console.log('error', error))
                              })
                              while (
                                uploadedFiles.length < selectedFiles.length
                              ) {
                                await new Promise((resolve) =>
                                  setTimeout(resolve, 100)
                                )
                              }

                              updateRoomRate({
                                variables: {
                                  rateInput: {
                                    id: data_rate.myRoomRate.id,
                                    rate: rating,
                                    comment: values.comment,
                                    images: uploadedFiles,
                                  },
                                },
                              })
                                .then((response) => {
                                  console.log(response)
                                  setIsSubmitted(true)
                                  uploadedFiles = []
                                })
                                .catch((error) => {
                                  console.log(JSON.stringify(error))
                                })
                              setSelectedFiles([])
                              setRating(0)
                              setSelectedImages([])
                            }}
                          >
                            {(props) => (
                              <Form>
                                <div className="flex flex-col divide-y divide-1-grey">
                                  <label htmlFor="file">Thêm ảnh</label>
                                  <input
                                    id="file"
                                    name="file"
                                    type="file"
                                    accept="image/*"
                                    onChange={(event) => {
                                      setSelectedFiles([
                                        ...selectedFiles,
                                        event.currentTarget.files[0],
                                      ])
                                      setSelectedImages([
                                        ...selectedImages,
                                        URL.createObjectURL(
                                          event.currentTarget.files[0]
                                        ),
                                      ])
                                    }}
                                    className="form-control"
                                    style={{ marginTop: '1vh' }}
                                  />
                                  <div
                                    className="multi-preview"
                                    style={{ marginTop: '1vh' }}
                                  >
                                    {selectedImages.map((image) => (
                                      <div
                                        key={image[0]}
                                        style={{
                                          float: 'left',
                                          marginTop: '1vh',
                                          marginRight: '10px',
                                        }}
                                      >
                                        <img
                                          src={image}
                                          style={{
                                            maxWidth: '10vw',
                                            maxHeight: '10vh',
                                          }}
                                          alt={'hinh anh nhan xet'}
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <label>Nhận xét phòng</label>
                                <FormTextArea
                                  rows={4}
                                  name="comment"
                                  className="border p-4 w-full"
                                  placeholder="Nhập mô tả nhận xét về phòng"
                                  maxLength={500}
                                />
                                <div className="flex justify-between text-sm text-neutral-60">
                                  <span>Tối đa 500 ký tự </span>
                                  <span>
                                    {props.values.comment.length}
                                    /500
                                  </span>
                                </div>
                                <Button
                                  md
                                  type="submit"
                                  primary
                                  block
                                  className="mt-4"
                                >
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


      </div>
      ;
    </>
  )
}
