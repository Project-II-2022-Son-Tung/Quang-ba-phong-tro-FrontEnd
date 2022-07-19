import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useInvitationsToMeQuery } from 'src/generated/graphql'
import MessageComponent from 'src/helper/MessageComponent'
import InvitationItem from './component/InvitationItem'
const InvitationsPage = () => {
  const { data, loading, error } = useInvitationsToMeQuery({
    variables: {},
  })

  if (loading) {
    return <MessageComponent message="Loading..."></MessageComponent>
  } else console.log(data)

  return (
    <>
 {data.invitationsToMe.map((invite) => {
        return (
          <div style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
            <InvitationItem

              id={invite.id}
              roomId={invite.room.id}
              owner={invite.owner}
              room = {invite.room}
              timeOfCheck = {invite.timeOfCheck}
              status = {invite.status}
              key={invite.id}

            />
          </div>
        )
      })}

    </>
  )
}

export default InvitationsPage
