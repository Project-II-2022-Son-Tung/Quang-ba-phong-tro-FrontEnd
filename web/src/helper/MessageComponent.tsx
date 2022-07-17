import React from 'react'

const MessageComponent = (props) => {
  return (
    <div style={{ width: '100%', marginTop: '30vh' }}>
      <p style={{ textAlign: 'center', fontSize: '50px' }}>{props.message}</p>
    </div>
  )
}
export default MessageComponent;
