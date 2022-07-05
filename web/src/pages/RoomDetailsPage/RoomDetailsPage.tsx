import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
type RoomDetailProps={id: string}
const RoomDetailsPage = ({id} :RoomDetailProps) => {
  console.log(id)

  return (
    <>
      <MetaTags title="RoomDetails" description="RoomDetails page" />

      <h1>{id}</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/RoomDetailsPage/RoomDetailsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>roomDetails</code>, link to me with `
      </p>
    </>
  )
}

export default RoomDetailsPage
