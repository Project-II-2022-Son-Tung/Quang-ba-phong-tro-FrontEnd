import { Router, Route, Set } from '@redwoodjs/router'

import CustomerLayout from 'src/layouts/CustomerLayout'
import GuestLayout from 'src/layouts/GuestLayout'
import OwnerLayout from './layouts/OwnerLayout/OwnerLayout'
const Routes = () => {
  return (
    <Router>
      <Route path="/admin/login" page={AdminLoginPage} name="adminLogin" />
      <Set wrap={CustomerLayout}>
        <Route path="/user/favourite-room" page={FavouriteRoomPage} name="favouriteRoom" />
        <Route path="/user" page={HomePage} name="home" />
        <Route path="/viewRoomDetails/{id:String}" page={ViewRoomDetailPage} name="viewRoomDetail" />
        <Route path="/user/edit-profile" page={EditProfilePage} name="editProfile" />
        <Route path="/invitations" page={InvitationsPage} name="invitations" />

      </Set>
      <Set wrap={GuestLayout}>
        <Route path="/" page={LoginPage} name="login" />
        <Route path="/user/signup" page={SignupPage} name="signup" />
      </Set>

      <Set wrap={OwnerLayout}>
        <Route path="/owner/postRoom" page={PostRoomPage  } name="postRoom" />
        <Route path="/owner" page={OwnerRoomPage} name="ownerRoom" />

      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
