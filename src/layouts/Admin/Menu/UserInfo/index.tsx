import { FC } from 'react'

import { IProps } from './type'
import './style.scoped.scss'

import userImg from './../../imgs/user.png'
import MoreIcon from '@material-ui/icons/MoreVertRounded'

export const UserInfo: FC<IProps> = ({
  isExpandMenu,
  themeClassName
}: IProps): JSX.Element => {
  return (
    <div
      className={`user-info ${themeClassName} ${
        isExpandMenu ? '' : '-is-collapsed'
      }`}
    >
      <div className="user-info__avatar -status-active">
        <img src={userImg} alt="" />
      </div>

      <div className="user-info__text">
        <div className="name">trunghongoc</div>
        <div className="role">Super Admin</div>
      </div>

      <div className="user-info__more">
        <MoreIcon />
      </div>
    </div>
  )
}
