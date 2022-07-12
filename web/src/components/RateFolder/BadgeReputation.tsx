import {BsFillTelephonePlusFill} from 'react-icons/bs';
export default function BadgeReputation({phoneNumber}) {
	return (
		<span className="bg-yellow/[.12] px-2 rounded-xl py-1 text-[#F5A623] text-lg">
		  <BsFillTelephonePlusFill className="inline-block w-4 h-4" style={{marginRight: "0.5vw"}} /> {phoneNumber}
		</span>
	);
}
