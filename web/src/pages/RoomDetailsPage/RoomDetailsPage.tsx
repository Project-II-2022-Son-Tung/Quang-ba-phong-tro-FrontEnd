import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import './room_detail.css'
import { useRoomQuery } from 'src/generated/graphql'
import { useParams } from '@redwoodjs/router'
import LoadingComponent from '../../helper/LoadingComponent'
type RoomDetailProps = { id: string; title: string }
const RoomDetailsPage = ({ id }: RoomDetailProps) => {
  const { data, loading, error } = useRoomQuery({
    variables: {
      roomId: id,
    },
  })

  if (loading) {
    return <LoadingComponent />
  } else {
    if (error) {
      console.log(error)
    }

    console.log(data)
  }

  const room = data.room.room

  const fixed_price =
    room.price % 1000000 == 0
      ? room.price / 1000000
      : (room.price / 1000000).toFixed(1)

  const createdAt = JSON.stringify(room.createdAt).substring(1, 10)
  console.log('created at....' + createdAt)
  return (
    <>
      <MetaTags title="RoomDetails" description="RoomDetails page" />

      <div className="roomDetails">
        <div className="left_column">
          <div className="slider">
            <h1>Hình ảnh </h1>
          </div>
          <div className="room_detail">
            <div>
              <p className="title_text">{room.title}</p>
            </div>
            <div>
              <p className="address_text">{room.address}</p>
            </div>
            <div className="flex_info">
              <div>
                <p className="price_text">{fixed_price} triệu </p>
              </div>
              <div style={{ marginLeft: '60px' }}>
                <p className="size_text">{room.size}m²</p>
              </div>
              <div style={{ marginLeft: '60px' }}>
                <p className="createdAt_text">{createdAt}</p>
              </div>
            </div>
            <div className="description">
              <p className="description_text">{room.description}</p>

            </div>
          </div>
        </div>

        <div className="right_column">
          <div className="contact_container">
            <div className='avt'><img className= 'avt_img' src={room.owner.avatarUrl}/></div>
            <div className='phone'><p className='phone_text'>{room.owner.phoneNumber}</p></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RoomDetailsPage
