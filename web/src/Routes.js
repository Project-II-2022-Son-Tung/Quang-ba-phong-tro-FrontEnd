import { Router, Route, Set } from '@redwoodjs/router'

import CustomerLayout from 'src/layouts/CustomerLayout'
import GuestLayout from 'src/layouts/GuestLayout'

const Routes = () => {
  return (
    <Router>

      <Set wrap={CustomerLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/postRoom" page={PostRoomPage} name="postroom" />
        {/* <Route path="/room-details/: id" page={RoomDetailsPage} name="roomDetails" /> */}

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
