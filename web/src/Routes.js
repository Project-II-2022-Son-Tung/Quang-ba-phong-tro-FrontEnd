import { Router, Route, Set } from '@redwoodjs/router'

import CustomerLayout from 'src/layouts/CustomerLayout'
import GuestLayout from 'src/layouts/GuestLayout'

const Routes = () => {
  return (
    <Router>

      <Set wrap={CustomerLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Set wrap={GuestLayout}>
        <Route path="/login" page={LoginPage} name="login" />

      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
