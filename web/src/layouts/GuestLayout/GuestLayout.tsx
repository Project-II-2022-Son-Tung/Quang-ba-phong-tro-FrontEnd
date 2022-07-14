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
      <header className="header" style={{backgroundColor: '#f8f9fd'}}>
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
          <Button onClick={onLoginClick} style={{backgroundColor: '#01d28e'}} shape="round">
            Đăng nhập
          </Button>
          <Button onClick={onSignupClick} style={{backgroundColor: '#01d28e'}}  shape="round">
            Đăng ký
          </Button>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default GuestLayout
