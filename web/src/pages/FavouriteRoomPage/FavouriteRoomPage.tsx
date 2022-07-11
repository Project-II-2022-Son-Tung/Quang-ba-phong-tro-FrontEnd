import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ListRoom from 'src/components/ListRoom/ListRoom'
import {useGetMyFavouritesQuery} from 'src/generated/graphql'
import RoomInfo from '../../components/ListRoom/component/RoomInfo/RoomInfo'

const FavouriteRoomPage = () => {

  const {data, loading, error} = useGetMyFavouritesQuery({
    variables: {

    }
  })

  console.log(data)
  return (
    <>
    <h1>Danh sách phòng yêu thích </h1>
    <div
      style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}
    >
      {data.me.roomFavourites.map((room) => {
        return (
          <>
            <RoomInfo
              // id={room.id}
              // title={room.title}
              // price={room.price}
              // size={room.size}
              // district={room.district}
              // province={room.province}
              // description={room.description}
              // rate={room.rate}
              // owner={room.owner}
              // address={room.address}
              // room_images={room.images}
              // key={room.id}

            />
          </>
        )
      })}

    </div>



    </>
  )
}

export default FavouriteRoomPage
