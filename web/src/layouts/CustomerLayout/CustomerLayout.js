import { Link, routes } from '@redwoodjs/router'

const CustomerLayout = ({ children }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <header style={{backgroundColor:'green'}}>
        <h1 style={{textAlign: 'center'}}>
          <Link to={routes.home()}>House Rental</Link>
        </h1>
        <nav >
          <ul style={{textAlign:'center'}}>
            <li>
              <Link to={routes.home()}>Trang chủ</Link>
            </li>
            <li>
              <Link to={routes.about()}>Phòng trọ đã lưu </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default CustomerLayout
