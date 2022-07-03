import { MetaTags } from '@redwoodjs/web'
import React, { useEffect, useState } from 'react'
import './index.css'

import { useProvincesLazyQuery } from '../../generated/graphql'
import { navigate, routes } from '@redwoodjs/router'



const PostRoomPage = () => {
  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([])

  const [getProvince, { loading: _getProvinceLoading, error }] = useProvincesLazyQuery(
    {
      onCompleted: (data) => {
        setProvinces(data.provinces)
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
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Mật khẩu </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
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
