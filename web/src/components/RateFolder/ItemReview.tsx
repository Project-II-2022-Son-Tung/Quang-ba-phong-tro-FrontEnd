import {
	HiOutlineShare,
	HiOutlineThumbDown,
	HiOutlineThumbUp
} from "react-icons/hi";
import {StarRating} from "./StarRating";
import Tag from "./Tag";
import { Image } from "antd";

export default function ItemReview() {
	return (
		<div className="border-b">
			<div className="flex items-center py-3">
				<div>
					<Image
						src="/icons/default-avatar.svg"
						alt="avatar"
						width={36}
						height={36}
            preview={false}
					/>
				</div>
				<div className="ml-4">
					<div className="text-sm font-semibold">Nguyễn Văn A</div>
					<div className="text-xs text-gray-600">22/3/2022</div>
				</div>
			</div>
			<div>
				<div>
					<StarRating rating={5} />
				</div>
				<div className="flex gap-4 mt-2">
					<Image src="/work.jpg" alt="work" width={80} height={80} />
				</div>
				<div className="mt-2">
					<p className="text-base text-neutral-80">
						After the first bad review on Aug 2019, Guy came to talk
						to me and he promised to fix everything and he and
						Ernesto did it. Ernesto sacrificed his Saturdays to come
						and fix the texture and paint. He did it multiple times
						because we didn&apos;t like what he did initially, but
						he listened to us and did texture/sand/paint multiple
						time until we were happy. Ernesto is skillful, honest
						and patient. He did whatever we&apos;ve asked. Tile
						alignment was also fixed. There are a couple of things
						that I am not completely happy about, but they are minor
						concerns and I can ignore them since Guy and Ernesto
						tried their best with lots of patience. I am happy with
						their work.
					</p>
				</div>
				<div className="mt-2 flex gap-2">
					<Tag>Thiết kế Web</Tag>
					<Tag>Landing Page</Tag>
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
