import { Select, Tag, Button } from 'antd'
import provinces from 'src/provinceData'

import React, { useEffect, useState } from 'react'
import { Form } from 'antd'
import { red } from '@mui/material/colors'

const { Option } = Select

const provinceData = provinces

const   FilterBar = (props) => {
  const onFinish = (values) => {
    // console.log('Success:', values)
    props.onFilter(values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([])

  const handleProvinceChange = (value) => {
    setDistricts(
      provinceData.find((province) => province.code == value).districts
    )
  }

  const handleDistrictChange = (value) => {
    setWards(districts.find((district) => district.code == value).wards)
  }

  // Chọn nâng cao
  const options = [

    {
      value: 'Khép kín',
    },
    {
      value: 'Chung chủ',
    },
    {
      value: 'Điều hòa',
    },
    {
      value: 'Nóng lạnh',
    },
    {
      value: 'Thú nuôi',
    },
    {
      value: 'Chỗ để xe',
    },
    {
      value: 'Thang máy',
    },
    {
      value: 'Wifi',
    },
  ]

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props

    const onPreventMouseDown = (event) => {
      event.preventDefault()
      event.stopPropagation()
    }

    return (
      <Tag
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
        }}
      >
        {label}
      </Tag>
    )
  }
  // Chọn nâng cao

  return (
    <>
      <div
        style={{
          height: '100px',
          backgroundColor: '#febb02',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          width: '85vw',

          borderRadius: '30px',
        }}
      >
        <Form

          size="large"
          layout="inline"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item name='province'>
            <Select
              size="large"
              placeholder="Chọn Tỉnh"
              style={{
                width: '200px',
                marginTop: '30px',
              }}
              onChange={handleProvinceChange}
            >
              <Option value="">Toàn quốc</Option>
              {provinceData.map((province) => (
                <Option value={province.code} key={province.code}>
                  {province.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name='district'>
            <Select
              size="large"
              placeholder="Chọn Quận, Huyện"
              style={{
                width: '200px',
                marginTop: '30px',
              }}
              onChange={handleDistrictChange}
            >
              <Option value="">Tất cả</Option>
              {districts.map((district) => (
                <Option key={district.code}>{district.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name='ward'>
            <Select
              size="large"
              placeholder="Chọn Phường, Xã"
              style={{
                width: '200px',
                marginTop: '30px',
              }}
            >
              <Option value="">Tất cả</Option>
              {wards.map((ward) => (
                <Option key={ward.code}>{ward.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="advanced">
            <Select
              size="large"
              mode="multiple"
              showArrow
              tagRender={tagRender}
              placeholder="Chọn nâng cao"
              // defaultValue={['Chọn nâng cao ']}
              style={{
                width: '500px',
                marginTop: '30px',
              }}
              options={options}
            />
          </Form.Item>
          <Form.Item >
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginTop: '30px', borderRadius:'30px', width: '100px'}}
            >
              Bộ lọc
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default FilterBar
