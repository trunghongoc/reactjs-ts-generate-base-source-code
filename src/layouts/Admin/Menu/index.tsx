import { FC } from 'react'

import { UserInfo } from './UserInfo'
import { Items } from './Items'
import { Footer } from './Footer'

import { useAdminThemeStyle, IUseAdminThemeStyle } from 'hooks/useThemeStyle'

import { IProps } from './type'
import './style.scoped.scss'

export const Menu: FC<IProps> = ({
  isExpandMenu,
  setIsExpandMenu
}: IProps): JSX.Element => {
  const { themeClassName }: IUseAdminThemeStyle = useAdminThemeStyle()

  return (
    <div
      className={`menu ${themeClassName} ${isExpandMenu ? '' : '-is-collaped'}`}
    >
      <UserInfo isExpandMenu={isExpandMenu} themeClassName={themeClassName} />

      <div className="title">
        <span>{isExpandMenu ? 'Navigation' : 'N'}</span>
      </div>

      <Items isExpandMenu={isExpandMenu} />

      <Footer isExpandMenu={isExpandMenu} setIsExpandMenu={setIsExpandMenu} />
    </div>
  )
}
