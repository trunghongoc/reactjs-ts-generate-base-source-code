import { FC } from 'react'
import { useAdminThemeStyle, IUseAdminThemeStyle } from 'hooks/useThemeStyle'
import { IProps } from './type'

// import logoIcon from './../imgs/logo.svg'
import userIcon from './../imgs/user.png'

import MenuIcon from '@material-ui/icons/MenuRounded'
import GridIcon from '@material-ui/icons/AppsRounded'
import EmailIcon from '@material-ui/icons/EmailRounded'
import BellIcon from '@material-ui/icons/NotificationsRounded'
import ArrowDownIcon from '@material-ui/icons/ExpandMoreRounded'

import './style.scoped.scss'

export const Navbar: FC<IProps> = ({
  isExpandMenu,
  setIsExpandMenu
}): JSX.Element => {
  const { themeClassName }: IUseAdminThemeStyle = useAdminThemeStyle()

  const toggleExpandMenu: any = (): void => {
    setIsExpandMenu(!isExpandMenu)
  }

  return (
    <div
      className={`navbar ${themeClassName} ${
        isExpandMenu ? '' : '-collaped-menu'
      }`}
    >
      <div className="navbar__left">
        {/* <img src={logoIcon} alt="" /> */}
        <span>{isExpandMenu ? 'trunghongoc' : 'T'}</span>
      </div>

      <div className="navbar__middle">
        <div className="navbar__middle__toggle" onClick={toggleExpandMenu}>
          <MenuIcon />
        </div>

        <div className="navbar__middle__search">
          <input type="text" placeholder="Search ..." />
        </div>
      </div>

      <div className="navbar__right">
        <div className="navbar__right__app">
          <GridIcon />
        </div>

        <div className="navbar__right__app -alert -success">
          <EmailIcon />
        </div>

        <div className="navbar__right__app -no-border -alert -warn">
          <BellIcon />
        </div>

        <div className="navbar__right__user">
          <img src={userIcon} alt="" />

          <span>
            trunghongoc <ArrowDownIcon />
          </span>
        </div>
      </div>
    </div>
  )
}
