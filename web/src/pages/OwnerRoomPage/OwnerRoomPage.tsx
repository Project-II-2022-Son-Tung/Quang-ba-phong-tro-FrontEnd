import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const OwnerRoomPage = () => {
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
