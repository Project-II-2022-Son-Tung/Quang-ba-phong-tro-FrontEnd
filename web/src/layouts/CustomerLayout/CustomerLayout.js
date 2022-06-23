import { Link, routes } from '@redwoodjs/router'
import "./index.css"
const CustomerLayout = ({ children }) => {
  return (
    <div>
      <header style={{}}>
        <h1 style={{textAlign: 'center'}}>
          <Link to={routes.home()}>House Rental</Link>
        </h1>
        <nav >
          <ul className="nav_bar">
            <li style={{color:'#ffffff'}}>

              <Link className='nav_text' to={routes.home()}>Trang chủ</Link>
            </li>
            <li>
              <Link className='nav_text' to={routes.about()}>Phòng trọ đã lưu</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default CustomerLayout
