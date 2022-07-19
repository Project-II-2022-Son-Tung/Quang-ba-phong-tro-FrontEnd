import react from 'react'
import './index.css'
import { navigate, routes, Link } from '@redwoodjs/router'
import { Button } from 'antd'

import {
  useAcceptInviteMutation,
  useRejectInviteMutation,
} from 'src/generated/graphql'

const InvitationItem = (props) => {
  const { id, roomId, owner, room, timeOfCheck, status } = props

  let date = new Date(timeOfCheck)

  let stringDate = date.toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  const [acceptInviteMutation] = useAcceptInviteMutation()

  const [rejectInviteMutation] = useRejectInviteMutation()

  const onHandleAcept = () => {
    acceptInviteMutation({
      variables: {
        inviteId: id,
      },
    })
    alert('Cháp nhận lời mời')
  }

  const onHandleReject = () => {
    rejectInviteMutation({
      variables: {
        inviteId: id,
      },
    })
  }

  return (
    <div className="roomInfo">
      <div className="container">
        <div className="image_container">
          <img className="img" src={owner.avatarUrl} />
        </div>
        <div className="info_container">
          <div className="title">
            <Link to={routes.viewRoomDetail({ id: roomId })}>
              <p className="title_text">{room.title}</p>
            </Link>
          </div>
          <div className="sub_info">
            <div>
              <p className="price_text">Giờ hẹn xem phòng : {stringDate}</p>
            </div>
          </div>
          <div className="description_container">
            <p className="price_text">{room.address}</p>
          </div>
          <div
            style={{
              marginLeft: '20px',
              justifyContent: 'space-between',
              display: 'flex',
            }}
          >
            <div>
              <Button
                type="primary"
                style={{ backgroundColor: '#16c784' }}
                onClick={onHandleAcept}
              >
                {' '}
                ✓ Chấp nhận
              </Button>
            </div>
            <div>
              <Button
                type="primary"
                style={{ backgroundColor: 'red' }}
                onClick={onHandleReject}
              >
                {' '}
                X Từ chối
              </Button>
            </div>
            <div>
              <Button type="primary" style={{ backgroundColor: '#1890ff' }}>
                {' '}
                Tạo hợp đồng
              </Button>
            </div>
          </div>

          <p
            className="size_text"
            style={{
              marginLeft: '20px',
              textAlign: 'center',
              marginTop: '5px',
              marginBottom: '5px',
            }}
          >
            {' '}
            Trạng thái lời mời : {status}
          </p>

          <div
            className="contact_container"
            style={{ height: '30px', marginTop: '0px' }}
          >
            <div
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                height: '28px',
                fontWeight: 'bold',
              }}
            >
              <p className="owner_name">Tên chủ cho thuê: {owner.fullName}</p>
            </div>

            <div
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                height: '28px',
                marginLeft: '30px',
                fontWeight: 'bold',
              }}
            >
              <p className="owner_name">Số điện thoại: {owner.phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvitationItem
