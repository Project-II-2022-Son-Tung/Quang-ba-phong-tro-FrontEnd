import React from 'react'
import { useRoomsQuery } from 'src/generated/graphql'
import RoomInfo from './component/RoomInfo/RoomInfo'
import './index.css'
const ListRoom = () => {
  const { data, loading, error } = useRoomsQuery({
    variables: {
      page: 1, // value for 'page'
      limit: 10, // value for 'limit'
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
    <div style={{justifyContent: 'center', alignItems: 'center'}}>
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
