import { Button } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import './index.css'
import { navigate, routes } from '@redwoodjs/router'

const GuestLayout = ({ children }) => {
  const onLoginClick = () => {
    navigate(routes.login())
  }

  const onSignupClick = () => {
    navigate(routes.signup())
  }
  return (
    <>
      <header className="header">
        <div style={{ alignItems: 'center', justifyContent: 'center' }}>
          <text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '30px',
            }}
          >House Rental</text>
        </div>
        <div>
          <Button onClick={onLoginClick} type="primary" shape="round">
            Đăng nhập
          </Button>
          <Button onClick={onSignupClick} type="primary" shape="round">
            Đăng ký
          </Button>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default GuestLayout
