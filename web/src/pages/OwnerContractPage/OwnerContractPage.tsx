import { Image } from "antd";
import Button from "src/components/RateFolder/Button";
import FormInputText from "src/components/RateFolder/FormInput";
import FormInputTextWithPostfix from "src/components/RateFolder/FormInputTextWithPostfix";
import FormTextArea from "src/components/RateFolder/FormTextArea";
import { Link, routes } from "@redwoodjs/router";
import { Head } from "@redwoodjs/web";
import { Form, Formik } from "formik";
import {
	HiArrowLeft,
	HiOutlineInbox,
	HiOutlineInformationCircle,
} from "react-icons/hi";
import { useCreateContractMutation, useRoomQuery } from "src/generated/graphql";
import MessageComponent from "src/helper/MessageComponent";

export default function CreateRequest({userId , roomId}) {
	const { data: room_data, loading: roomLoading } = useRoomQuery({
    variables: {
      roomId
    }
  });
	const [createContract, { loading: createContractLoading }] = useCreateContractMutation();

	return (
	{roomLoading} ? (
  <>
    <MessageComponent message='Loading...'/>
  </>) :
  (<>
			<Head>
				<title>
					 "Tạo hợp đồng"
				</title>
				<meta name="robot" content="noindex,nofollow" />
			</Head>
			<div className="bg-white">
				<div className="flex items-center justify-between px-8 py-4">
					<span className="text-neutral-100 text-2xl font-semibold">
						"Tạo hợp đồng"
					</span>
					<Button
						type="button"
						sm
						secondary>
						{" "}
						<HiArrowLeft />
            <Link to={routes.invitations()}>
            Quay lại
            </Link>
					</Button>
				</div>
				<div className="p-6">
					<Formik
						initialValues={
							Object.assign(
								{
									detailAddress: room_data.room.room.address,
									deposit: 0,
									additionalAgreements: "",
									contractMonths: 0,
									leasePrice: room_data.room.room.price / 1000,
									upper_bound_fee: 0,
								}
							) as {
								detailAddress: string;
								deposit?: number;
								additionalAgreements?: string;
								contractMonths: number;
								leasePrice: number;
								upper_bound_fee: number;
							}
						}

						onSubmit={async (values) => {
								const createContractInput = {
                  detailAddress: values.detailAddress,
                  deposit: values.deposit * 1000,
                  additionalAgreements: values.additionalAgreements,
                  contractMonths: values.contractMonths,
                  leasePrice: values.leasePrice * 1000,
                }
                const { data } = await createContract({
                  variables: {
                    contractInput: {
                      ...createContractInput,
                      roomId,
                      userId,
                    }
                  },
                });

						}}
						enableReinitialize>
						{({ values, setFieldValue, errors }) => {
							return (
								<Form className="divide-y divide-grey-1">
									<div className="py-6 grid grid-cols-12 gap-[7.5rem]">
										<div className="col-span-3">
											<label
												htmlFor="detailAddress"
												className="font-semibold text-neutral-100">
												Nhập địa chỉ cụ thể
											</label>
											<p className="text-sm text-neutral-60">
												Địa chỉ cụ thể cho phòng cho thuê để người thuê đến nhận phòng
											</p>
										</div>
										<div className="col-span-5">
											<FormInputText
												name="detailAddress"
												placeholder="VD: số nhà, ngách, ngõ, phường, thành phố,..."
											/>
											<p className="text-sm text-neutral-60">
												Tối đa 180 ký tự
											</p>
										</div>
									</div>
									<div className="py-6 grid grid-cols-12 gap-[7.5rem]">
										<div className="col-span-3">
											<label
												htmlFor="additionalAgreements"
												className="font-semibold text-neutral-100">
												Điều khoản bổ sung thêm
											</label>
											<p className="text-sm text-neutral-60">
												Mô tả chi tiết các điều khoản bổ sung thêm của hợp đồng thuê phòng
											</p>
										</div>
										<div className="col-span-5">
											<FormTextArea
												name="additionalAgreements"
												className="border p-4 h-32"
												placeholder="Nhập các điều khoản bổ sung"
											/>
											<p className="flex justify-between text-sm text-neutral-60">
												<span>Tối đa 500 ký tự </span>
												<span>0/500</span>
											</p>
										</div>
									</div>
									<div className="py-6 grid grid-cols-12 gap-[7.5rem]">
										<div className="col-span-3">
											<label
												htmlFor="deposit"
												className="font-semibold text-neutral-100">
												Phí đặt cọc thuê trọ
											</label>
											<p className="text-sm text-neutral-60">
												Vui lòng nhập mức giá đặt cọc thuê trọ
											</p>
										</div>
										<div className="col-span-5">
											<label className="inline-flex mb-4 items-center text-base font-semibold text-neutral-100">
												Nhập giá đặt cọc (đơn vị ngàn đồng){" "}
												<HiOutlineInformationCircle />
											</label>{" "}
											<div className="flex">
												<FormInputTextWithPostfix
													className="inline w-1/3 mr-7"
													type="number"
													max="100000"
													min="1000"
													name="deposit"
													placeholder="Nhập giá đặt cọc (đơn vị ngàn đồng)"
													icon={
														<Image
															src="/icons/VND.svg"
															alt="Ngàn đồng"
															width="20px"
															height="20px"
														/>
													}
												/>
											</div>
										</div>
                    <div className="col-span-5">
											<label className="inline-flex mb-4 items-center text-base font-semibold text-neutral-100">
												Nhập giá thuê trọ (đơn vị ngàn đồng){" "}
												<HiOutlineInformationCircle />
											</label>{" "}
											<div className="flex">
												<FormInputTextWithPostfix
													className="inline w-1/3 mr-7"
													type="number"
													max="100000"
													min="1000"
													name="leasePrice"
													placeholder="Nhập giá thuê trọ (đơn vị ngàn đồng)"
													icon={
														<Image
															src="/icons/VND.svg"
															alt="Ngàn đồng"
															width="20px"
															height="20px"
														/>
													}
												/>
											</div>
										</div>
									</div>
									<div className="py-6 grid grid-cols-12 gap-[7.5rem]">
										<div className="col-span-3">
											<label
												htmlFor="contractMonths"
												className="font-semibold text-neutral-100">
												Số tháng thời hạn hợp đồng
											</label>
											<p className="text-sm text-neutral-60">
												Là thời gian hợp đồng có hiệu lực
											</p>
										</div>
										<div className="col-span-5">
											<FormInputText
												max="12"
												type="number"
												name="contractMonths"
												placeholder="Nhập thời gian hợp đồng có hiệu lực"
											/>
											<p className="text-sm text-neutral-60">
												Tối đa 40 ký tự
											</p>
										</div>
									</div>
									<div className="py-6">
										<div className="flex gap-4 justify-end">
											<Button type="button" md secondary>
												Hủy bỏ
											</Button>
											<Button type="submit" md primary>
												Xác nhận
											</Button>
										</div>
									</div>
								</Form>
							);
						}}
					</Formik>
				</div>
			</div>
		</>)
	);
}
