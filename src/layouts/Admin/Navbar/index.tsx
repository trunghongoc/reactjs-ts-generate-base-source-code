import { FC } from 'react'

import { IProps } from './type'

import './style.scoped.scss'

export const Navbar: FC<IProps> = ({ children }: IProps): JSX.Element => {
  return (
    <>
      <div className="navbar">{children}</div>
    </>
  )
}
