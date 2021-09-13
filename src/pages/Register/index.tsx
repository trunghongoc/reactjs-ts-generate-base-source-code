import { FC } from 'react'
import { Link } from 'react-router-dom'

import './style.scoped.scss'

const Register: FC = (): JSX.Element => {
  return (
    <div>
      <p>Register Page</p>
      <Link to="/login">Go to Login</Link> | <Link to="/">Go to Dashboard</Link>
    </div>
  )
}

export default Register
