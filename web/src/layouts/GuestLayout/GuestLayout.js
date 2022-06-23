import {Button} from 'antd';
import "antd/dist/antd.css";
import React from 'react';
const GuestLayout = ({ children }) => {
  return (
    <div>
      <header style={{display:'flex', flexDirection:'row', alignItems:'center'}}>

        <h1 style={{}}>
          House Rental
        </h1>

        <Button style={{justifyContent:'right'}} type="primary" shape="round">Đăng nhập</Button>
        <Button style={{justifyContent:'right'}} type="primary" shape="round">Đăng ký</Button>


      </header>
      <main>{children}</main>
    </div>
  )
}

export default GuestLayout
