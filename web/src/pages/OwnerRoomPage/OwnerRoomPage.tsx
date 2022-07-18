import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useMeOwnerQuery } from 'src/generated/graphql'
import { useRoomsQuery } from 'src/generated/graphql'
import MessageComponent from 'src/helper/MessageComponent'
import RoomInfo from '../../components/ListRoom/component/RoomInfo'
import ListRoom from 'antd/lib/layout/layout'
import { useState } from 'react'
const OwnerRoomPage = () => {

  let finalFilter={}

  const [currentPage, setCurrentPage] = useState(1)

    const onChangePage = (page) => {
      setCurrentPage(page)
    }




  const { data, loading, error } = useRoomsQuery({
     variables: {
      page: currentPage, // value for 'page'
      limit: 10, // value for 'limit'
      filter: finalFilter
     }
    });

    if(loading) {
      return <MessageComponent message="Loading..."></MessageComponent>
    }
    else console.log(data)
  return (
    <>
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
        {/* <Pagination


          current={currentPage}
          onChange={onChangePage}
          total={totalPages * 10}
        /> */}
      </div>
    </div>



    </>
  )
}

export default OwnerRoomPage
