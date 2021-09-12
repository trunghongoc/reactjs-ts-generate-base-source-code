import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { setAdminTheme } from 'redux/reducers/themeSlice'
import { useAdminThemeStyle, IUseAdminThemeStyle } from 'hooks/useThemeStyle'
import { ADMIN_THEME_NAME } from 'services/theme/type'

import ArrowLeftIcon from '@material-ui/icons/ChevronLeftRounded'
import ArrowRightIcon from '@material-ui/icons/ChevronRightRounded'
import MoonIcon from '@material-ui/icons/NightsStayRounded'
import SunIcon from '@material-ui/icons/WbSunnyRounded'

import { IProps } from './type'
import './style.scoped.scss'

export const Footer: FC<IProps> = ({
  isExpandMenu,
  setIsExpandMenu
}: IProps): JSX.Element => {
  const dispatch: any = useDispatch()

  const { name, themeClassName }: IUseAdminThemeStyle = useAdminThemeStyle()

  const toggleThemeStyle: any = (): void => {
    const nextTheme: ADMIN_THEME_NAME =
      name === ADMIN_THEME_NAME.dark
        ? ADMIN_THEME_NAME.light
        : ADMIN_THEME_NAME.dark

    dispatch(setAdminTheme(nextTheme))
  }

  const toggleExpandMenu: any = (): void => {
    setIsExpandMenu(!isExpandMenu)
  }

  return (
    <div
      className={`footer ${themeClassName} ${
        isExpandMenu ? '-is-expand-menu' : ''
      }`}
    >
      {isExpandMenu && (
        <div className="switch-theme">
          <div className="round-btn" onClick={toggleThemeStyle}>
            {name === ADMIN_THEME_NAME.dark ? <SunIcon /> : <MoonIcon />}
          </div>
        </div>
      )}

      <div className="expand">
        <div className="round-btn" onClick={toggleExpandMenu}>
          {isExpandMenu ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </div>
      </div>
    </div>
  )
}
