import { Link } from '@redwoodjs/router'
import './index.css'
import { Button } from 'antd'
import { navigate, routes } from '@redwoodjs/router'
import {UserOutlined} from '@ant-design/icons'
const OwnerLayout = ({ children }) => {
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
            <p
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '30px',

              }}
            >
              <Link to={routes.home()} >House Rental</Link>
            </p>
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

            <li>
              {/* <Link className="nav_text" to={routes.favouriteRoom()}> */}
                Phòng trọ của bạn
              {/* </Link> */}
            </li>
            <li>
              <Link className="nav_text" to={routes.postRoom()}>
                Đăng phòng
              </Link>
            </li>
            {/* <li style={{position:'absolute', right:'0'}}>
              <Link className="nav_text" to={routes.editProfile()}>
              <UserOutlined />
              </Link>
            </li> */}

          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default OwnerLayout
