import { Image } from "antd";
import {HiOutlineBookmark, HiOutlinePencil} from "react-icons/hi";
import Avatars from "./Avatars";
import BadgeReputation from "./BadgeReputation";
import {StarRating} from "./StarRating";

interface IProfileProps {
	name: string;
	numEvaluation: number;
	linkAvt?: string;
	isUserView?: boolean;
	rating?: number;
  phoneNumber: string;
}

function Profiles({
	name,
	numEvaluation,
	rating,
	linkAvt,
	isUserView,
  phoneNumber,
}: IProfileProps) {
	return (
		<div className="border flex flex-col justify-center items-center bg-light px-3 pt-5 pb-5">
			<Avatars active linkAvt={linkAvt} />
			<div className="mt-4">
				<h3 className="text-lg font-medium text-neutral-100 mb-2 text-center">
					{name}
				</h3>
				<div className="flex justify-center mb-4">
					<StarRating rating={rating} />
					<span className="text-xs text-neutral-60 font-normal mt-[3px] mx-1">
						{numEvaluation} Đánh giá
					</span>
				</div>
        <div className="flex mb-5 justify-center">
					<BadgeReputation phoneNumber={phoneNumber}/>
				</div>
				<div className="flex flex-col justify-center items-center">
					{isUserView ? (
						<>
              <a href={`https://zalo.me/${phoneNumber}`}>
							<button className="min-w-[222px] h-[42px] bg-[#FC7139] text-base font-medium text-light mb-4">
								Liên hệ
							</button>
              </a>
							<button className="flex justify-center items-center min-w-[222px] h-[42px] border border-brand-primary bg-light text-base font-medium text-brand-primary">
								<HiOutlineBookmark className="text-base" />
								<span className="ml-2">Lưu xem sau</span>
							</button>
						</>
					) : (
						<button
							className="flex justify-center items-center min-w-[222px] h-[42px] bg-brand-primary text-base font-medium text-light"
						>
							<HiOutlinePencil className="text-xl" />
							<span className="ml-2">Chỉnh sửa</span>
						</button>
					)}
					<span className="text-sm font-normal text-neutral-60 mt-3">
						Chia sẻ trang cá nhân tiền bối
					</span>
				</div>
				<div className="mt-4 flex justify-between">
					<Image
						src={"/icons/Facebook.svg"}
						width={48}
						height={48}
						alt="facebook"
            preview={false}
					/>
          <a href={`https://zalo.me/${phoneNumber}`} >
					<Image src={"/icons/Zalo.svg"} width={48} height={48} alt="zalo" preview={false} />
          </a>
          <a href={`tel:${phoneNumber}`} >
					<Image
						src={"/icons/whatsapp-fill.svg"}
						width={48}
						height={48}
						alt="whatsApp"
            preview={false}
					/>
          </a>
				</div>
			</div>
		</div>
	);
}

export default Profiles;
