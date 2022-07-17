import { Link } from '@redwoodjs/router'
import './index.css'
import { Button } from 'antd'
import { navigate, routes } from '@redwoodjs/router'
import { UserOutlined } from '@ant-design/icons'
import { useLogoutMutation } from 'src/generated/graphql'
const CustomerLayout = ({ children }) => {


  const [logout ] = useLogoutMutation()





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
              <Link to={routes.home()}>House Rental</Link>
            </p>
          </div>

          <div style={{ position: 'absolute', right: '20px' }}>
            <Button
              onClick={async () => {
                await logout();

                navigate(routes.login())

              }}
              style={{
                width: '200px',
                height: '40px',
                borderRadius: '30px',
                backgroundColor: '#1890ff',
              }}
              type="primary"
            >
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
              <Link className="nav_text" to={routes.favouriteRoom()}>
                Phòng trọ đã lưu
              </Link>
            </li>
            <li>
              <Link className="nav_text" to={routes.invitations()}>
                Lời mời xem phòng
              </Link>
            </li>
            <li style={{ position: 'absolute', right: '0' }}>
              <Link className="nav_text" to={routes.editProfile()}>
                <UserOutlined />
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
