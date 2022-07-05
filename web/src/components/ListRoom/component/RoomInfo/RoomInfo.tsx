import React from 'react'
import './index.css'
import images from 'src/assets/images'
import { navigate, routes } from '@redwoodjs/router'
import { useParams } from '@redwoodjs/router'
// import images from 'src/assets/images'
const RoomInfo = (props) => {
  const {id, title, price, size, district, province, description, owner, room_images } = props


  // const room_id = useParams()
  const fixed_price =
    price % 1000000 == 0 ? price / 1000000 : (price / 1000000).toFixed(1)





  const img_src = ((!room_images) || room_images.length == 0  ) ? images.room : room_images[0].imageUrl

  // const onTitleClick = () =>{
  //   navigate('/room-detail/'+id)
  // }

  return (
    <div className="container">
      <div className="image_container">
        <img className="img" src= {img_src}/>


      </div>
      <div className="info_container">
        <div className="title">
          <a  className="title_text">{title}</a>
        </div>
        <div className="sub_info">
          <div>
            <text className="price_text">{fixed_price} triệu/tháng</text>
          </div>
          <div>
            <text className="size_text">{size} m²</text>
          </div>
          <div>
            <text className="district_text">
              {district.full_name}, {province.name}
            </text>
          </div>
        </div>
        <div className="description_container">
          <text className="description_text">{description}</text>
        </div>
        <div className="contact_container">
           <div><img className="avt_img" src={owner.avatarUrl}/></div>
           <div><text className="owner_name">{owner.fullName}</text></div>


        </div>
      </div>
    </div>
  )
}
export default RoomInfo
