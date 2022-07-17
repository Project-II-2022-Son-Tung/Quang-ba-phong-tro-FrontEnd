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

  let submittedData


  const [updateUserMutation, {}] = useUpdateUserMutation({
      variables: {
          updateUserInput: {fullName: submittedData.fullName, phoneNumber: submittedData.phoneNumber, address: submittedData.address}
      },
    });



  const onSubmit = (dataSubmit: any) => {

    console.log(dataSubmit)


  }





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
            name="fullName"
            className="input"
            errorClassName="input error"
            validation={{ required: true }}
            placeholder={data.me.fullName}
          />

          <FieldError name="fullName" className="error-message" />



          <Label name="Số điện thoại" className="label" errorClassName="label error" />
          <TextField
            name="phoneNumber"
            className="input"
            errorClassName="input error"
            validation={{
              required: true,
            }}
            // placeholder={data.me.phoneNumber}
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
            placeholder={data.me.address}
          />

          <FieldError name="address" className="error-message" />

          <Submit style={{border:'none', marginTop:'20px', backgroundColor:''}}><Button type="primary"> Lưu</Button></Submit>
        </Form>
      </div>
    </div>
  )
}

export default EditProfilePage
