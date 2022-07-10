import { MetaTags } from '@redwoodjs/web'
import React, { useState } from 'react'
import { Checkbox } from 'antd'
import './index.css'

import { useLoginAdminMutation} from '../../generated/graphql'
import { navigate, routes } from '@redwoodjs/router'

const AdminLoginPage = () => {
  const [loginAdmin, { loading: _loginAdminLoading }] = useLoginAdminMutation()



  // const [mutate] =useMutation(mutation)

  const [isSubmitted, setIsSubmitted] = useState(false)

  // User Login info

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault()

    const uname = event.target.uname.value
    const pass = event.target.pass.value

    let  response = await loginAdmin({
      variables: {
        loginInput: { usernameOrEmail: uname, password: pass },
      },
    })

    console.log(uname + '__' + pass + '')





    const adminData = (response.data.loginAdmin) ? response.data.loginAdmin.success : false

    // Compare user info
    if (adminData) {
      setIsSubmitted(true)
      // navigate(routes.home())
      alert('Admin đã đăng nhập')

    }
     else {
      setIsSubmitted(false)
      // Username not found
    }
  }

  const onChangeCheckbox = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Tên tài khoản </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Mật khẩu </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>

        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )

  return (
    <>
      <MetaTags title="Login" description="Login page" />
      <div className="app">
        <div className="login-form">
          <div className="title">Đăng nhập</div>
          {isSubmitted ? (
            <>
              <div>Người dùng đã đăng nhập thành công</div>
            </>
          ) : (
            renderForm
          )}
        </div>
      </div>
    </>
  )
}

export default AdminLoginPage
