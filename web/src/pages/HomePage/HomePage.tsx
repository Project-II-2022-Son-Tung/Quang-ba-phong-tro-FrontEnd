import { MetaTags } from '@redwoodjs/web'
import { Button } from 'antd'
import ListRoom from 'src/components/ListRoom/ListRoom'
import { useRoomsQuery } from 'src/generated/graphql'
import { useState } from 'react'
import TopBar from 'src/components/TopBar/TopBar'
const HomePage = () => {

  const [filter, setFilter] = useState()

  const onFilter=(values)=>{
    console.log(values);
    setFilter(values);



  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div style={{marginTop:'50px'}}>
      <TopBar onFilter={onFilter}/>
      <ListRoom filter={filter} />
      </div>

    </>
  )
}

export default HomePage
