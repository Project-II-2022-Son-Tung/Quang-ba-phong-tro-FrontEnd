import { Select, Tag, Button } from 'antd'
import provinces from 'src/provinceData'

import React, { useEffect, useState } from 'react'
import { Form } from 'antd'

const { Option } = Select

const provinceData = provinces

const ProvinceBar = (props) => {


  const onFinish = (values) => {
    console.log('Success:', values);
    props.onFilter(values);

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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

  return (
    <>
      <Form
        layout="inline"
        labelCol={{ span: 26 }}
        wrapperCol={{ span: 26 }}
        style={{ alignItems: 'center' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item>
          <Select
            placeholder="Chọn Tỉnh"
            style={{
              width: '100%',
              marginLeft: '25px',
            }}
            onChange={handleProvinceChange}
          >
            {provinceData.map((province) => (
              <Option value={province.code} key={province.code}>
                {province.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="Chọn Quận, Huyện"
            style={{
              width: '100%',
              marginLeft: '25px',
            }}
            onChange={handleDistrictChange}
          >
            {districts.map((district) => (
              <Option key={district.code}>{district.name}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="Chọn Phường, Xã"
            style={{
              width: '100%',
              marginLeft: '25px',
            }}
          >
            {wards.map((ward) => (
              <Option key={ward.code}>{ward.name}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Select
            size="large"
            mode="multiple"
            showArrow
            tagRender={tagRender}
            placeholder="Chọn nâng cao"
            // defaultValue={['Chọn nâng cao ']}
            style={{
              width: '50vw',
            }}
            options={options}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default ProvinceBar
