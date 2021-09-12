import { FC, useState, useEffect } from 'react'

import { Navbar } from './Navbar'
import { Menu } from './Menu'
import { IProps } from './type'

import { useAdminThemeStyle, IUseAdminThemeStyle } from 'hooks/useThemeStyle'

import './style.scoped.scss'

export const AdminLayout: FC<IProps> = ({ children }: IProps): JSX.Element => {
  const [isExpandMenu, setIsExpandMenu] = useState<boolean>(true)

  const { themeClassName }: IUseAdminThemeStyle = useAdminThemeStyle()

  useEffect((): void => {
    console.log('---mounted')
  }, [])

  return (
    <>
      <div
        className={`admin-layout ${themeClassName} ${
          isExpandMenu ? '' : '-is-collapsed'
        }`}
      >
        <Navbar isExpandMenu={isExpandMenu} setIsExpandMenu={setIsExpandMenu} />

        <div className="admin-layout__body">
          <div className="left">
            <Menu
              isExpandMenu={isExpandMenu}
              setIsExpandMenu={setIsExpandMenu}
            />
          </div>

          <div className="right">
            <div className="content">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
