import { MetaTags } from '@redwoodjs/web'
import React, { useEffect, useState } from 'react'
import './index.css'

import { useProvincesLazyQuery } from '../../generated/graphql'
import { navigate, routes } from '@redwoodjs/router'



const PostRoomPage = () => {
  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([])
  const [wifi, setWifi] = useState(false)
  const [selectedFile, setSelectedFile] = useState();


  const [getProvince, { loading: _getProvinceLoading, error }] = useProvincesLazyQuery(
    {
      onCompleted: (data) => {
        setProvinces(data.provinces)
      console.log(data.provinces)
      }
    }
  )

  // const [mutate] =useMutation(mutation)

  const [isSubmitted, setIsSubmitted] = useState(false)

  // User PostRoom info
  useEffect(() => {
    getProvince()
  } , [])

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault()

    const uname = event.target.uname.value
    const pass = event.target.pass.value

    console.log(uname + '__' + pass + '')


  }

  const handleProvinceChange = (event) => {
    const provinceId = event.target.value
    const province = provinces.find(province => province.code === provinceId)
    setDistricts(province.districts)
  }

  const handleDistrictChange = (event) => {
    const districtId = event.target.value
    const district = districts.find(district => district.code === districtId)
    setWards(district.wards)
  }
  const toggleWifi = (event) => {
    setWifi(event.target.checked)
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
    console.log(event.target.files)
  }

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Tên phòng</label>
          <input type="text" name="title" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Mô tả</label>
          <input type="text" name="description" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Tỉnh/Thành phố</label>
          <select name="province" id="province" defaultValue={''} onChange={handleProvinceChange}>
            <option value="" >Chọn tỉnh/thành phố</option>
            {provinces.map(province => (
              <option key={province.code} value={province.code} id={province.code}>{province.name}</option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <label>Quận/Huyện</label>
          <select name="district" id="district" defaultValue={''} onChange={handleDistrictChange}>
            <option value="" >Chọn Quận/Huyện</option>
            {districts.map(district => (
              <option key={district.code} value={district.code} id={district.code}>{district.name}</option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <label>Phường/xã</label>
          <select name="ward" id="ward" defaultValue={''}>
            <option value="" >Phường/xã</option>
            {wards.map(ward => (
              <option key={ward.code} value={ward.code} id={ward.code}>{ward.name}</option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <label>Địa chỉ</label>
          <input type="text" name="address" required />
        </div>
        <div className="input-container">
          <label>Hình ảnh minh họa</label>
          <input type="file" name="file" onChange={handleFileChange} />
        </div>
        <div className="input-container">
          <label>Chiều rộng (mét vuông)</label>
          <input type="text" name="size" required />
        </div>
        <div className="input-container">
          <label>Tầng thứ:</label>
          <input type="text" name="floor" required />
        </div>
        <div className="input-container">
          <label>Số tầng của tòa nhà</label>
          <input type="text" name="numberOfFloors" required />
        </div>
        <div className="input-container">
          <label>Số người tối đa</label>
          <input type="text" name="maxOccupancy" required />
        </div>
        <div className="input-container">
          <label>Giá tiền điện mỗi số</label>
          <input type="text" name="electricPrice" required />
        </div>
        <div className="input-container">
          <label>Giá nước mỗi người/tháng</label>
          <input type="text" name="waterPrice" required />
        </div>
        <div className="input-container">
          <label>Giá tiền phòng mỗi tháng</label>
          <input type="text" name="price" required />
        </div>
        <div className="input-container2">
          <label style={{float: "left", marginTop: "auto" }}>Trọ chung chủ</label>
          <input type="checkbox" name="liveWithHost" required style={{alignSelf: "center"}}/>
          <label style={{float: "left", marginTop: "auto" }}>Khép kín</label>
          <input type="checkbox" name="enclosed" required style={{alignSelf: "center"}}/>
          <label style={{float: "left", marginTop: "auto" }}>Cho phép động vật</label>
          <input type="checkbox" name="petsAllowed" required style={{alignSelf: "center"}}/>
          <label style={{float: "left", marginTop: "auto" }}>Wifi</label>
          <input type="checkbox" name="wifi" onChange={toggleWifi} required style={{alignSelf: "center"}}/>
        </div>
        <div className="input-container">
          <label>Phí wifi mỗi phòng/tháng</label>
          <input type="text" name="wifiFee" required disabled={!wifi} />
        </div>

        <div className="input-container2">
          <label style={{float: "left", marginTop: "auto" }}>Chỗ để xe</label>
          <input type="checkbox" name="parking" required style={{alignSelf: "center"}}/>
          <label style={{float: "left", marginTop: "auto" }}>Nóng lạnh</label>
          <input type="checkbox" name="waterHeating" required style={{alignSelf: "center"}}/>
          <label style={{float: "left", marginTop: "auto" }}>Điều hòa</label>
          <input type="checkbox" name="airConditioning" required style={{alignSelf: "center"}}/>
          <label style={{float: "left", marginTop: "auto" }}>Thang máy</label>
          <input type="checkbox" name="lift" required style={{alignSelf: "center"}}/>
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )

  return (
    <>
      <MetaTags title="PostRoom" description="PostRoom page" />
      <div className="app">
        <div className="postRoom-form">
          <div className="title">Đăng phòng</div>
          {isSubmitted ? (
            <>
            <div>Người dùng đã đăng phòng thành công</div>
            </>
          ) : (

            renderForm
          )}
        </div>
      </div>
    </>
  )
}

export default PostRoomPage
