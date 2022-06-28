import { MetaTags } from '@redwoodjs/web'
import { Button } from 'antd'
import ListRoom from 'src/components/ListRoom/ListRoom'
import { useRoomsQuery } from 'src/generated/graphql'
import { useState } from 'react'

const HomePage = () => {


  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div style={{marginTop:'50px'}}>
      <ListRoom />
      </div>

    </>
  )
}

export default HomePage
