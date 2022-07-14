import { Image } from "antd";
import { useState } from "react";
import { HiOutlineBookmark, HiOutlineCheckCircle } from "react-icons/hi";
import Button from "./Button";
import { RoomQuery, useCheckRoomFavouritedQuery } from "src/generated/graphql";

export default function RoomCart(props: { data?: RoomQuery, addToFavourite: any, isFavourite: boolean, removefromFavourite: any }) {
  const [isFavourite, setIsFavourite] = useState(props.isFavourite)
  const handleAddToFavourite = () => {
    props.addToFavourite({
      variables: {
        roomId: props?.data?.room.room.id,
      },
    })
    setIsFavourite(true)
  }

  const handleRemoveFromFavourite = () => {
    props.removefromFavourite({
      variables: {
        roomId: props?.data?.room.room.id,
      },
    })
    setIsFavourite(false)
  }
  const dataDateToString = (date: string) => {
    const dateString = new Date(date);
    return dateString.toLocaleDateString(undefined, { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit"  });
  }
  const features = [
		`Địa chỉ: ${props?.data?.room.room.address}`,
		`Diện tích : ${props?.data?.room.room.size} m²`,
    `Thời điểm đăng : ${dataDateToString(props?.data?.room.room.createdAt)}`,
	];
	return (
		<>
			<div className="w-full bg-white ring-2 ring-grey shadow-md">
				<div className="border-b h-[70px] flex items-center justify-center">
					<div className="flex items-center gap-2 text-2xl font-semibold text-status-yellow">
						<Image
							src="/icons/VND.svg"
							width={20}
							height={20}
							alt="VND_icon"
              preview={false}
              wrapperClassName="antd-wrapper-center"
						/>
						{props?.data?.room.room.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
					</div>
				</div>
				<div className="p-8">
					<ul className="list-none flex flex-col gap-2">
						{features.map((feature, index) => (
							<li
								key={index}
								className="flex items-center gap-3 text-neutral-80 text-base font-normal">
								<HiOutlineCheckCircle className="text-brand-primary" />
								{feature}
							</li>
						))}
					</ul>
					<div className="mt-6">
            {isFavourite ? (
              <Button
                block
                md
                className="bg-brand-primary text-white"
                onClick={handleRemoveFromFavourite}
              >
                Đã yêu thích
              </Button>) : (
                <Button
                block
                md
                className="bg-status-red text-white"
                onClick={handleAddToFavourite}>
                Thêm vào danh sách yêu thích
              </Button>
              )
            }

						<div className="flex mt-2 gap-2">
							<Button
								className="flex-1 text-base px-3 py-2 font-semibold bg-white text-brand-second-6">
								<HiOutlineBookmark /> Lưu tư vấn sau
							</Button>
							<Button
								plain
								className="bg-grey px-3 py-2 text-base font-semibold flex-1">
								Chia sẻ
							</Button>
						</div>
						<div className="text-center text-sm font-semibold text-neutral-100 px-3 mt-2">
							CHÚNG TÔI SẼ HOÀN 100% TIỀN NẾU KHÔNG HÀI LÒNG VỚI DỊCH VỤ SAU 24H
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
