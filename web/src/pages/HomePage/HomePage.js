import { MetaTags } from '@redwoodjs/web'
import {Button} from 'antd'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      Home
      <Button type="primary">Button</Button>
    </>
  )
}

export default HomePage
