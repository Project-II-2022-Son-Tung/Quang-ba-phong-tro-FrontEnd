import React from 'react'
import './index.css'
import images from 'src/assets/images'
const RoomInfo = (props) => {
  const { title, price, size, district, province, description, owner } = props

  const fixed_price =
    price % 1000000 == 0 ? price / 1000000 : (price / 1000000).toFixed(1)

  return (
    <div className="container">
      <div className="image_container">
        <img className="img" src={images.room} />
      </div>
      <div className="info_container">
        <div className="title">
          <a className="title_text">{title}</a>
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
