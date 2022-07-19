import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const OwnerViewRoomDetailPage = () => {
  return (
    <>
      <MetaTags title="OwnerViewRoomDetail" description="OwnerViewRoomDetail page" />

      <h1>OwnerViewRoomDetailPage</h1>
      <p>
        Find me in <code>./web/src/pages/OwnerViewRoomDetailPage/OwnerViewRoomDetailPage.tsx</code>
      </p>
      <p>
        My default route is named <code>ownerViewRoomDetail</code>, link to me with `
        <Link to={routes.ownerViewRoomDetail()}>OwnerViewRoomDetail</Link>`
      </p>
    </>
  )
}

export default OwnerViewRoomDetailPage
