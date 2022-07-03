import { Select, Tag } from 'antd'
import React from 'react'
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

const SelectBar = () => (
  <Select
    size="large"
    mode="multiple"
    showArrow
    tagRender={tagRender}
    placeholder='Chọn nâng cao'
    // defaultValue={['Chọn nâng cao ']}
    style={{
      width: '50%',
      marginLeft: '25%',


    }}
    options={options}
  />
)

export default SelectBar
