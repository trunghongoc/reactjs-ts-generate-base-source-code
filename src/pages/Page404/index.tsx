import { FC } from 'react'
import { Link } from 'react-router-dom'

const Page404: FC = (): JSX.Element => {
  return (
    <div>
      <p>PAGE NOT FOUND</p>
      <Link to="/login">Go to Login</Link> | <Link to="/">Go to Dashboard</Link>
    </div>
  )
}

export default Page404
