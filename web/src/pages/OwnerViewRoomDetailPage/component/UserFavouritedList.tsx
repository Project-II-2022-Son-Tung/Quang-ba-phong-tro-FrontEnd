import React from 'react'
import 'antd/dist/antd.css'
import './index.css'
import { Button, Table } from 'antd'
import { useGetUsersFavouritedQuery } from 'src/generated/graphql'
import MessageComponent from 'src/helper/MessageComponent'
import { useInviteMutation } from 'src/generated/graphql'
const columns = [
  {
    title: 'Họ và tên',
    dataIndex: 'fullName',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phoneNumber',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
  },
  {
    title: 'Tạo lời mời',
    dataIndex: 'createInvitation',
    render: () => <Button>Tạo lời mời xem phòng</Button>,
  },
]

const UserFavouritedList = (props) => {
  const { id, data } = props

  if(!data) return <MessageComponent message="Chưa có người yêu thích phòng"></MessageComponent>
  return (
    <div>
      <h1>Danh sách người dùng đã yêu thích phòng</h1>
      <Table columns={columns} dataSource={data.getUsersFavourited} size="middle" />
    </div>
  )
}

export default UserFavouritedList
