import { Router, Route, Set } from '@redwoodjs/router'

import CustomerLayout from 'src/layouts/CustomerLayout'
import GuestLayout from 'src/layouts/GuestLayout'
import RoomDetailsPage from './pages/RoomDetailsPage/RoomDetailsPage'
const Routes = () => {
  return (
    <Router>
      <Route path="/favourite-room" page={FavouriteRoomPage} name="favouriteRoom" />
      <Route path="/admin/login" page={AdminLoginPage} name="adminLogin" />
      <Set wrap={CustomerLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/postRoom" page={PostRoomPage} name="postroom" />
        <Route path="/roomDetails/{id:String}" page={RoomDetailsPage} name="roomDetails" />
        <Route path="/user/edit-profile" page={EditProfilePage} name="editProfile" />

      </Set>
      <Set wrap={GuestLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
