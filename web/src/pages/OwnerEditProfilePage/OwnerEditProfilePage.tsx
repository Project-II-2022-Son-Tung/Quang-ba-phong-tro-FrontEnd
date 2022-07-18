import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import LoadingComponent from '../../helper/MessageComponent'
import './index.css'
import { Button } from 'antd'
import { useMeOwnerQuery, useUpdateUserMutation } from 'src/generated/graphql'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
const OwnerEditProfilePage = () => {
  let submittedData = {
    fullName: '',
    phoneNumber: '',
    address: '',
  }
  const { data, loading, error } = useMeOwnerQuery({
    variables: {},
  })






  if (loading) {
    return <LoadingComponent />
  } else {
    if (error) {
      console.log(error)
    }

    console.log(data)
  }

  return (
    <div className="edit-profile">
      <div className="form">
        <h1 style={{fontSize:'24px', textAlign:'center', fontWeight:'bold'}}>Chỉnh sửa thông tin cá nhân</h1>
        <Form >
          <Label
            name="Tên người dùng"
            className="label"
            errorClassName="label error"
          />
          <TextField
            name="fullName"
            className="input"
            errorClassName="input error"
            validation={{ required: true }}
            placeholder={data.meOwner.fullName}

          />

          <FieldError name="fullName" className="error-message" />

          <Label
            name="Số điện thoại"
            className="label"
            errorClassName="label error"
          />
          <TextField
            name="phoneNumber"
            className="input"
            errorClassName="input error"
            validation={{
              required: true,
            }}
            placeholder={data.meOwner.phoneNumber}

          />
          <FieldError name="phoneNumber" className="error-message" />

          <Label
            name="Địa chỉ"
            className="label"
            errorClassName="label error"
          />
          <TextAreaField
            name="address"
            className="input"
            errorClassName="input error"
            validation={{ required: true }}
            placeholder={data.meOwner.address}


          />

          <FieldError name="address" className="error-message" />

          <Submit
            style={{ border: 'none', marginTop: '20px', backgroundColor: '#1890ff' }}
          >
            <Button type="primary"> Lưu</Button>
          </Submit>
        </Form>
      </div>
    </div>
  )
}

export default OwnerEditProfilePage
