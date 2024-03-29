import {
  HiOutlinePlus,
	HiOutlineShare,
	HiOutlineThumbDown,
	HiOutlineThumbUp
} from "react-icons/hi";
import {StarRating} from "./StarRating";
import Tag from "./Tag";
import { Image } from "antd";
import Button from "./Button";

export default function ItemReview({rate, comment, user, images, createdDate, isEditable, id, openEdit}) {
  let date = new Date(createdDate);
  let stringDate = date.toLocaleDateString(undefined, { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit"  });

	return (
		<div className="border-b">
			<div className="flex items-center py-3">
				<div className="rounded-[50%] overflow-hidden">
					<Image
						src={user?.avatarUrl ? user?.avatarUrl : "/icons/default-avatar.svg"}
						alt="avatar"
						width={36}
						height={36}
            preview={false}
					/>
				</div>
				<div className="ml-4">
					<div className="text-sm font-semibold">{user?.fullName}</div>
					<div className="text-xs text-gray-600">{stringDate}</div>
				</div>
        <div className="ml-auto" style={{visibility: isEditable ? "visible" : "hidden" }}>
            <Button
              sm
              onClick={() => openEdit(true)}
              className="text-star border">
              <HiOutlinePlus className="mr-1" />
              Sửa đánh giá
            </Button>
        </div>
			</div>
			<div>
				<div>
					<StarRating rating={rate} />
				</div>
				<div className="flex gap-4 mt-2">
					{
          images.map((image, index) => (
            <Image src={image?.imageUrl} alt="mo-ta" width={80} height={80} key={index} />
          ))
          }
				</div>
				<div className="mt-2">
					<p className="text-base text-neutral-80">
						{comment}
					</p>
				</div>
				<div className="mt-2 flex gap-2">
					<Tag>Nhà trọ</Tag>
					<Tag>Đánh giá</Tag>
				</div>
			</div>
			<div className="mt-2 py-2">
				<div className="flex items-center text-sm text-neutral-60">
					<div>
						<span role="button" className="inline-flex items-center gap-2">
							<HiOutlineThumbUp />
							Thích
						</span>
						<span role="button" className="inline-flex items-center ml-3 gap-2">
							<HiOutlineThumbDown />
							Không thích
						</span>
					</div>
					<div className="ml-auto">
						<span role="button" className="inline-flex items-center gap-2">
							<HiOutlineShare/>
							Chia sẻ
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
