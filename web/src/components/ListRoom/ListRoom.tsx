import React from 'react'
import { useRoomsQuery } from 'src/generated/graphql'
import RoomInfo from './component/RoomInfo/RoomInfo'
import './index.css'
const ListRoom = (props) => {
  if (!props.filter) {
  }

  let finalFilter = {}

  if (props.filter) {
    if (props.filter.province) {
      finalFilter['provinceCode'] = props.filter.province
    }
    if(props.filter.district) {
      finalFilter['districtCode'] = props.filter.district
    }
    if(props.filter.ward){
      finalFilter['wardCode'] = props.filter.ward
    }
  }

  console.log(props.filter)
  const { data, loading, error } = useRoomsQuery({
    variables: {
      page: 1, // value for 'page'
      limit: 10, // value for 'limit'
      filter:finalFilter
        // ? {
        //     provinceCode: [props.filter.province],
        //     districtCode: [props.filter.district],
        //     wardCode: [props.filter.ward],
        //     // ...props.filter.advanced,
        //   }
        // : {}, // value for 'filter'
    },
  })

  if (loading) {
    return <p>Loading</p>
  } else {
    if (error) {
      console.log(error)
    }

    console.log(data)
  }

  return (
    <div
      style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}
    >
      {data.rooms.map((room) => {
        return (
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
        )
      })}
    </div>
  )
}
export default ListRoom
