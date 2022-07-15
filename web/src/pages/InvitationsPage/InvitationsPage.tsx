import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvitationsPage = () => {
  return (
    <>
      <MetaTags title="Invitations" description="Invitations page" />

      <h1>InvitationsPage</h1>
      <p>
        Find me in <code>./web/src/pages/InvitationsPage/InvitationsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>invitations</code>, link to me with `
        <Link to={routes.invitations()}>Invitations</Link>`
      </p>
    </>
  )
}

export default InvitationsPage
