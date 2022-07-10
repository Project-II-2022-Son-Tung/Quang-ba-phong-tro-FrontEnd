import React, { useState } from 'react'
import { useRoomsQuery } from 'src/generated/graphql'
import RoomInfo from './component/RoomInfo/RoomInfo'
import { Pagination } from 'antd'
import LoadingComponent  from '../../helper/LoadingComponent'
import './index.css'
const ListRoom = (props) => {
  let finalFilter = {}

  if (props.filter) {
    if (props.filter.province) {
      finalFilter['provinceCode'] = props.filter.province
    }
    if (props.filter.district) {
      finalFilter['districtCode'] = props.filter.district
    }
    if (props.filter.ward) {
      finalFilter['wardCode'] = props.filter.ward
    }
    if (props.filter.advanced) {
      props.filter.advanced.forEach((item) => {
        switch (item) {
          case 'Khép kín':
            finalFilter['enclosed'] = true
            break

          case 'Chung chủ':
            finalFilter['enclosed'] = true
            break
          case 'Điều hòa':
            finalFilter['airConditioning'] = true
            break
          case 'Nóng lạnh':
            finalFilter['waterHeating'] = true
            break
          case 'Thú nuôi':
            finalFilter['petsAllowed'] = true
            break
          case 'Chỗ để xe':
            finalFilter['parking'] = true
            break
          case 'Thang máy':
            finalFilter['lift'] = true
            break
          case 'Wifi':
            finalFilter['wifi'] = true
            break
        }
      })
    }
  }

  const [currentPage, setCurrentPage] = useState(1)

  const onChangePage = (page) => {
    setCurrentPage(page)
  }

  // console.log(props.filter)
  const { data, loading, error } = useRoomsQuery({
    variables: {
      page: currentPage, // value for 'page'
      limit: 10, // value for 'limit'
      filter: finalFilter
    },
  })

  if (loading) {
    return <LoadingComponent/>
  } else {
    if (error) {
      console.log(error)
    }

    console.log(data)
  }
  // const totalPages = data.rooms.totalPages

  // console.log(totalPages)



  return (
    <div
      style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}
    >
      {data.rooms.rooms.map((room) => {
        return (
          <>
            <RoomInfo
              id={room.id}
              title={room.title}
              price={room.price}
              size={room.size}
              district={room.district}
              province={room.province}
              description={room.description}
              rate={room.rate}
              owner={room.owner}
              address={room.address}
              room_images={room.images}
              key={room.id}

            />
          </>
        )
      })}
      <div
        style={{
          width: '22vw',
          height: '40px',
          marginLeft: '39vw',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Pagination


          current={currentPage}
          onChange={onChangePage}
          // total={totalPages * 10}
        />
      </div>
    </div>
  )
}
export default ListRoom
