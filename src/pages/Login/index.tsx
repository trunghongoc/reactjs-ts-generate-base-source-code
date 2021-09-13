import { FC } from 'react'
import { Link } from 'react-router-dom'

import './style.scoped.scss'

const Login: FC = (): JSX.Element => {
  return (
    <div>
      <p>Login Page</p>
      <Link to="/register">Go to Register</Link> |{' '}
      <Link to="/">Go to Dashboard</Link>
    </div>
  )
}

export default Login
