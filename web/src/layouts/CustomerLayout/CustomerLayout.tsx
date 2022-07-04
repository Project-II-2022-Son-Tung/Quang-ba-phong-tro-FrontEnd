import { Link } from '@redwoodjs/router'
import './index.css'
import { Button } from 'antd'
import { navigate, routes } from '@redwoodjs/router'

const CustomerLayout = ({ children }) => {
  return (
    <div>
      <header style={{ marginTop: '16px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ alignItems: 'center', justifyContent: 'center' }}>
            <text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '30px',

              }}
            >
              <Link to={routes.home()} >House Rental</Link>
            </text>
          </div>

          <div style={{ position: 'absolute', right: '20px' }}>
            <Button
              onClick={() => {
                navigate(routes.login())
              }}
              style={{ width: '200px', height: '40px', borderRadius: '30px' }}
              type="primary"
            >
              {' '}
              Đăng xuất
            </Button>
          </div>
        </div>

        <nav>
          <ul className="nav_bar">
            <li style={{ color: '#ffffff' }}>
              <Link className="nav_text" to={routes.home()}>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link className="nav_text" to={routes.about()}>
                Phòng trọ đã lưu
              </Link>
            </li>
            <li>
              <Link className="nav_text" to={routes.postroom()}>
                Đăng phòng
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default CustomerLayout
