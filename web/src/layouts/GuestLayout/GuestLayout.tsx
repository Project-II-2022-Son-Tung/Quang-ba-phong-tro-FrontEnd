import { Button } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import './index.css'
const GuestLayout = ({ children }) => {
  return (
    <>
      <header
        className="header"
      >
        <h1 style={{}}>House Rental</h1>
        <div>

          <Button type="primary" shape="round">
            Đăng nhập
          </Button>
          <Button type="primary" shape="round">
            Đăng ký
          </Button>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default GuestLayout
