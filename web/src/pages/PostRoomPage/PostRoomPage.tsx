import { MetaTags } from '@redwoodjs/web'
import React, { useState } from 'react'
import './index.css'

import provinces from '../../provinceData'
import { useCreateRoomMutation } from 'src/generated/graphql'



const PostRoomPage = () => {
  const [createRoom, { loading: _createRoomLoading, error }] = useCreateRoomMutation()
  const [provinceDatas, setProvinces] = useState(provinces)
  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([])
  const [wifi, setWifi] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [caption, setCaption] = useState("");


  // const [mutate] =useMutation(mutation)

  const [isSubmitted, setIsSubmitted] = useState(false)

  // User PostRoom info

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault()
    // let images = selectedFiles.map(async file => {
    //   return {
    //     filename: file.name,
    //     filetype: file.type,
    //     value: file.base64
    //   }
    // })
    let uploadedFiles = [];

    selectedFiles.forEach(async file => {
      let formData = new FormData();
      console.log(file[0])
      formData.append("file", file[0]);
      fetch(process.env.BACKEND_URL + "/uploadImages", {
        method: "POST",
        body: formData,
      })
      .then(response => response.text())
      .then(result => uploadedFiles.push({fileUrl: result, caption: file[1]}))
      .catch(error => console.log('error', error));
    });
    while(uploadedFiles.length < selectedFiles.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    const room = {
      title: event.target.title.value,
      description: event.target.description.value,
      province: event.target.province.value,
      district: event.target.district.value,
      ward: event.target.ward.value,
      address: event.target.address.value,
      size: parseInt(event.target.size.value),
      floor: parseInt(event.target.floor.value),
      numberOfFloors: parseInt(event.target.numberOfFloors.value),
      waterPrice: parseInt(event.target.waterPrice.value),
      price: parseInt(event.target.price.value),
      maxOccupancy: parseInt(event.target.maxOccupancy.value),
      liveWithHost: event.target.liveWithHost.checked as boolean,
      enclosed: event.target.enclosed.checked as boolean,
      petsAllowed: event.target.petsAllowed.checked as boolean,
      parking: event.target.parking.checked as boolean,
      waterHeating: event.target.waterHeating.checked as boolean,
      airConditioning: event.target.airConditioning.checked as boolean,
      lift: event.target.lift.checked as boolean,
      wifi: event.target.wifi.checked as boolean,
      wifiFee: parseInt(event.target.wifiFee.value),
      electricPrice: parseInt(event.target.electricPrice.value),
      images : uploadedFiles,
    };
    createRoom({
      variables: {
        roomInput: room,
      },
    })
    .then((response) => {
      console.log(response)
      setIsSubmitted(true)
    })
    .catch((error) => {
      console.log(JSON.stringify(error))
    }
    )



  }

  const handleProvinceChange = (event) => {
    const provinceId = event.target.value
    const province = provinceDatas.find(province => province.code === provinceId)
    setDistricts(province.districts)
  }

  const handleDistrictChange = (event) => {
    const districtId = event.target.value
    const district = districts.find(district => district.code === districtId)
    setWards(district.wards)
  }
  const toggleWifi = (event) => {
    setWifi(event.target.checked)
    document.forms[0].wifiFee.value = ""
  }
  const setNewCaption = (event) => {
    setCaption(event.target.value)
  }

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, [event.target.files[0], caption]])
    setSelectedImages([...selectedImages, [URL.createObjectURL(event.target.files[0]), caption]])
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
            {provinceDatas.map(province => (
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
        <div className="multi-preview">
            {(selectedImages).map(image => (
                <img key={image[0]} style={{float: "left", marginTop: "auto", maxWidth: "10vw", maxHeight: "10vh" }} src={image[0]} alt={image[1]}  />
            ))}
        </div>
        <div className="input-container">
          <label>Hình ảnh minh họa</label>
          <div style={{display: "flex", flexDirection: "row", gap: "8px"}}>
          <input type="text" name="caption" placeholder='Tiêu đề ảnh...' onChange={setNewCaption}/>
          <input type="file" name="file" accept="image/*" onChange={handleFileChange} />
          </div>
        </div>
        <div className="input-container">
          <label>Chiều rộng (mét vuông)</label>
          <input type="text" name="size" />
        </div>
        <div className="input-container">
          <label>Tầng thứ:</label>
          <input type="text" name="floor" />
        </div>
        <div className="input-container">
          <label>Số tầng của tòa nhà</label>
          <input type="text" name="numberOfFloors" />
        </div>
        <div className="input-container">
          <label>Số người tối đa</label>
          <input type="text" name="maxOccupancy" />
        </div>
        <div className="input-container">
          <label>Giá tiền điện mỗi số</label>
          <input type="text" name="electricPrice" />
        </div>
        <div className="input-container">
          <label>Giá nước mỗi người/tháng</label>
          <input type="text" name="waterPrice" />
        </div>
        <div className="input-container">
          <label>Giá tiền phòng mỗi tháng</label>
          <input type="text" name="price" required />
        </div>
        <div className="input-container2">
          <label style={{float: "left", marginTop: "auto" }}>Trọ chung chủ</label>
          <input type="checkbox" name="liveWithHost" style={{alignSelf: "center"}}/>
          <label style={{float: "left", marginTop: "auto" }}>Khép kín</label>
          <input type="checkbox" name="enclosed" style={{alignSelf: "center"}}/>
          <label style={{float: "left", marginTop: "auto" }}>Cho phép động vật</label>
          <input type="checkbox" name="petsAllowed" style={{alignSelf: "center"}}/>
          <label style={{float: "left", marginTop: "auto" }}>Wifi</label>
          <input type="checkbox" name="wifi" onChange={toggleWifi} style={{alignSelf: "center"}}/>
        </div>
        <div className="input-container">
          <label>Phí wifi mỗi phòng/tháng</label>
          <input type="text" name="wifiFee" disabled={!wifi} />
        </div>

        <div className="input-container2">
          <label style={{float: "left", marginTop: "auto" }}>Chỗ để xe</label>
          <input type="checkbox" name="parking" style={{alignSelf: "center"}}/>
          <label style={{float: "left", marginTop: "auto" }}>Nóng lạnh</label>
          <input type="checkbox" name="waterHeating" style={{alignSelf: "center"}}/>
          <label style={{float: "left", marginTop: "auto" }}>Điều hòa</label>
          <input type="checkbox" name="airConditioning" style={{alignSelf: "center"}}/>
          <label style={{float: "left", marginTop: "auto" }}>Thang máy</label>
          <input type="checkbox" name="lift" style={{alignSelf: "center"}}/>
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
