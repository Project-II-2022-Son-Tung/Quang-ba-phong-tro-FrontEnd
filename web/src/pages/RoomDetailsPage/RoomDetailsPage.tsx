import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RoomDetailsPage = (props) => {
  return (
    <>
      <MetaTags title="RoomDetails" description="RoomDetails page" />

      <h1>RoomDetailsPage</h1>
      <p>
        Find me in <code>./web/src/pages/RoomDetailsPage/RoomDetailsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>roomDetails</code>, link to me with `
        <Link to={routes.roomDetails()}>RoomDetails</Link>`
      </p>
    </>
  )
}

export default RoomDetailsPage
