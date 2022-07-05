import React from 'react'
import './index.css'
import images from 'src/assets/images'
import { navigate, routes, Link } from '@redwoodjs/router'
import { useParams } from '@redwoodjs/router'
// import images from 'src/assets/images'

const RoomInfo = (props) => {
  const {
    id,
    title,
    price,
    size,
    district,
    province,
    description,
    owner,
    room_images,
    address,
  } = props

  // const room_id = useParams()
  const fixed_price =
    price % 1000000 == 0 ? price / 1000000 : (price / 1000000).toFixed(1)

  const img_src =
    !room_images || room_images.length == 0
      ? images.room
      : room_images[0].imageUrl

  // const onTitleClick = () =>{
  //   navigate('/room-detail/'+id)
  // }

  return (
    <div className="roomInfo">
      <div className="container">
        <div className="image_container">
          <img className="img" src={img_src} />
        </div>
        <div className="info_container">
          <div className="title">
            {/* <a  className="title_text">{title}</a> */}
            <Link to={routes.roomDetails({ id: id })}>
              <p className="title_text">{title}</p>
            </Link>
          </div>
          <div className="sub_info">
            <div>
              <p className="price_text">{fixed_price} triệu/tháng</p>
            </div>
            <div>
              <p className="size_text">{size} m²</p>
            </div>
            <div>
              <p className="district_text">
                {district.full_name}, {province.name}
              </p>
            </div>
          </div>
          <div className="description_container">
            <p className="description_text">{description}</p>
          </div>
          <div className="contact_container">
            <div>
              <img className="avt_img" src={owner.avatarUrl} />
            </div>
            <div style={{textAlign: 'center', justifyContent: 'center', height: '28px', marginLeft: '10px'}} >
              <p className="owner_name">{owner.fullName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RoomInfo
