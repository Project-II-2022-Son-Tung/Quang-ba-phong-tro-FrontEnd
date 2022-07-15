import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ListRoom from 'src/components/ListRoom/ListRoom'
import { useGetMyFavouritesQuery } from 'src/generated/graphql'
import RoomInfo from '../../components/ListRoom/component/RoomInfo/RoomInfo'
import LoadingComponent from 'src/helper/MessageComponent'

const FavouriteRoomPage = () => {
  const { data, loading, error } = useGetMyFavouritesQuery()

  if (!loading) {
    console.log(data)
  }

  return (
    <>

      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          marginBottom : 50,
        }}
      >
        {loading ? (
          <LoadingComponent />
        ) : (
          data.me.roomFavourites.map((room) => {
            return (
                <RoomInfo
                  id={room.room.id}
                  title={room.room.title}
                  price={room.room.price}
                  size={room.room.size}
                  district={room.room.district}
                  province={room.room.province}
                  description={room.room.description}
                  rate={room.room.rate}
                  owner={room.room.owner}
                  address={room.room.address}
                  room_images={room.room.images}
                  key={room.room.id}
                />
            )
          })
        )}

        {}
      </div>
    </>
  )
}

export default FavouriteRoomPage
