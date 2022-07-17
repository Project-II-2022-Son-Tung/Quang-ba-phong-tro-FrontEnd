import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useMeOwnerQuery } from 'src/generated/graphql'
import { useRoomsQuery } from 'src/generated/graphql'
import MessageComponent from 'src/helper/MessageComponent'
import ListRoom from 'antd/lib/layout/layout'
import { useState } from 'react'
const OwnerRoomPage = () => {

  let finalFilter={}

  const [currentPage, setCurrentPage] = useState(1)

    const onChangePage = (page) => {
      setCurrentPage(page)
    }




  const { data, loading, error } = useRoomsQuery({
     variables: {
      page: currentPage, // value for 'page'
      limit: 10, // value for 'limit'
      filter: finalFilter
     }
    });

    if(loading) {
      return <MessageComponent message="Loading..."></MessageComponent>
    }
    else console.log(data)
  return (
    <>
      <MetaTags title="OwnerRoom" description="OwnerRoom page" />

      <h1>OwnerRoomPage</h1>
      <p>
        Find me in <code>./web/src/pages/OwnerRoomPage/OwnerRoomPage.tsx</code>
      </p>
      <p>
        My default route is named <code>ownerRoom</code>, link to me with `
        <Link to={routes.ownerRoom()}>OwnerRoom</Link>`


      </p>
    </>
  )
}

export default OwnerRoomPage
