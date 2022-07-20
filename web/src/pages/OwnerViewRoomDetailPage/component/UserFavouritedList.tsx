import React, { useState } from 'react'
import 'antd/dist/antd.css'
import './index.css'
import { Button, Table, Modal, DatePicker, TimePicker, Form, Input } from 'antd'
import { useGetUsersFavouritedQuery } from 'src/generated/graphql'
import MessageComponent from 'src/helper/MessageComponent'
import { useInviteMutation } from 'src/generated/graphql'

const UserFavouritedList = (props) => {
  const { roomId, data } = props
  let stringDate = ''
  let stringTime = ''
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [date, setDate] = useState()
  const format = 'HH:mm'
  const [form] = Form.useForm()
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  function onChangeDate(date, dateString) {
    stringDate = dateString
    console.log(stringDate)
  }

  function onChangeTime(time, timeString) {
    stringTime = timeString
    console.log(stringTime)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const [invite, { data: inviteData, loading, error }] = useInviteMutation()

  const handleSubmit = (dataIndex, roomId) => {
    invite({
      variables: {
        inviteInput: {
          roomId: roomId,
          timeOfCheck: stringDate + ' ' + stringTime,
          userId: dataIndex,
        },
      },
    })
    alert('Tạo lời mời thành công')
  }
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
      dataIndex: 'id',
      render: (dataIndex) => (
        <>
          <Button
            onClick={showModal}
            // invite({
            //   variables:{
            //    inviteInput:{
            //     roomId: 'ac0158b9-1328-4b7d-b8d1-90b4bfed617b',
            //     timeOfCheck :"2022-07-02 13:08:01",
            //     userId: dataIndex

            //    }

            //   }
            // })
            // alert("Tạo lời mời thành công")
          >
             Tạo lời mời xem phòng
          </Button>
          <Modal
            title="Chọn thời gian xem phòng"
            visible={isModalVisible}
            onOk={handleOk}
            style={{}}
            onCancel={handleCancel}
            footer={null}
          >
            <Form
              preserve={false}
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item label="date" name="date">
                <DatePicker onChange={onChangeDate} />
              </Form.Item>
              <Form.Item label="time" name="time">
                <TimePicker onChange={onChangeTime} />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  onClick={() => {
                    handleSubmit(dataIndex, roomId)
                  }}
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: '#1890ff' }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </>
      ),
    },
  ]

  if (!data)
    return (
      <MessageComponent message="Chưa có người yêu thích phòng"></MessageComponent>
    )
  return (
    <div>
      <p style={{ fontSize: '24px', fontWeight: '500px' }}>
        Danh sách người dùng đã yêu thích phòng
      </p>
      <Table
        style={{ marginTop: '50px' }}
        columns={columns}
        dataSource={data.getUsersFavourited}
        size="middle"
      />
    </div>
  )
}

export default UserFavouritedList
