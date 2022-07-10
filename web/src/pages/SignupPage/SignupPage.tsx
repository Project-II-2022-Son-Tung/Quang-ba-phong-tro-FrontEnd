import { MetaTags } from '@redwoodjs/web'
import React, { useState } from 'react'
import './index.css'

import { useLoginMutation } from '../../generated/graphql'
import { navigate, routes } from '@redwoodjs/router'



const LoginPage = () => {

  const [loginUser, { loading: _loginUserLoading, error }] = useLoginMutation()

  // const [mutate] =useMutation(mutation)

  const [isSubmitted, setIsSubmitted] = useState(false)

  // User Login info

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault()

    const uname = event.target.uname.value
    const pass = event.target.pass.value

    // console.log(uname + '__' + pass + '')

    const response = await loginUser({
      variables: {
        loginInput: { usernameOrEmail: uname, password: pass },
      },
    })
    // console.log(response)

    const userData = response.data.login.success

    // Compare user info
    if (userData) {
      setIsSubmitted(true);
      navigate(routes.home())
    } else {
      setIsSubmitted(false)
      // Username not found
    }
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
          <div className="title">Đăng ký</div>
          {isSubmitted ? (
            <>
            <div>Người dùng đã đăng ký thành công</div>
            </>
          ) : (

            renderForm
          )}
        </div>
      </div>
    </>
  )
}

export default LoginPage
