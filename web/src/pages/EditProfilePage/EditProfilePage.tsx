import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import LoadingComponent from '../../helper/MessageComponent'
import './index.css'
import {Button} from 'antd'
import { useMeQuery, useUpdateUserMutation } from 'src/generated/graphql'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
const EditProfilePage = () => {
  const { data, loading, error } = useMeQuery({
    variables: {},
  })

  let submittedData = {}

  const onSubmit = (dataSubmit) => {
    console.log(dataSubmit)
    submittedData = dataSubmit
    return submittedData
  }

  const {} = useUpdateUserMutation({
    variables: {
      updateUserInput: submittedData,
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

  return (
    <div className="edit-profile">
      <div className="form">
        <Form onSubmit={onSubmit}>
          <Label
            name="Tên người dùng"
            className="label"
            errorClassName="label error"
          />
          <TextField
            name="fullname"
            className="input"
            errorClassName="input error"
            validation={{ required: true }}
            placeholder={data.me.fullName}
          />

          <FieldError name="fullname" className="error-message" />

          <Label
            name="Tên tài khoản"
            className="label"
            errorClassName="label error"
          />
          <TextField
            name="username"
            className="input"
            errorClassName="input error"
            validation={{ required: true }}
            placeholder={data.me.username}
          />
          <FieldError name="username" className="error-message" />

          <Label name="Email" className="label" errorClassName="label error" />
          <TextField
            name="email"
            className="input"
            errorClassName="input error"
            validation={{
              required: true,
            }}
            placeholder={data.me.email}
          />
          <FieldError name="email" className="error-message" />

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
            placeholder={data.me.address}
          />

          <FieldError name="address" className="error-message" />

          <Submit style={{border:'none', marginTop:'20px'}}><Button type="primary"> Lưu</Button></Submit>
        </Form>
      </div>
    </div>
  )
}

export default EditProfilePage
