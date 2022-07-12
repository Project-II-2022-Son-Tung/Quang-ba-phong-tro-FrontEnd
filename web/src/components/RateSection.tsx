import React, { Fragment, useState } from 'react'
import Button from './RateFolder/Button'
import { HiOutlinePlus, HiOutlineX } from "react-icons/hi";
import { StarRating } from './RateFolder/StarRating';
import Link from 'antd/lib/typography/Link';
import ItemReview from './RateFolder/ItemReview';
import { Dialog, Transition } from '@headlessui/react';
import { Image } from 'antd';
import Rating from './RateFolder/Rating';
import { Form, Formik } from 'formik';
import FormTextArea from './RateFolder/FormTextArea';

const RateSection = (service) => {
  const [rating, setRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
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
            {service?.rate}
          </span>
          <span>
            <StarRating rating={service?.rate} />
          </span>
          <span className="text-neutral-60 text-sm">
            Dựa trên {service?.number_of_rate} đánh
            giá
          </span>
          <span className="text-status-blue text-sm">
            <Link href="/">
              <a>Chi tiết</a>
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
															height={"48px"}
														/>
													</div>
													<div>
														<p className="body-4-semibold m-0">
															{service?.owner
																?.fullName ||
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
													{service?.title || ""}
												</div>
											</div>
											<div className="flex items-center py-4">
												<div>Đánh giá</div>
												<div className="ml-auto">
													<Rating
														value={rating}
														onChange={(value) => {
															setRating(value);
														}}
													/>
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
													}}>
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
																maxLength={500}
															/>
															<p className="flex justify-between text-sm text-neutral-60">
																<span>
																	Tối đa 500
																	ký tự{" "}
																</span>
																<span>
																	{
																		props
																			.values
																			.comment
																			.length
																	}
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
    </>

  )
}

export default RateSection
