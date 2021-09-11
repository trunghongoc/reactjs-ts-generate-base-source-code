import { useSelector } from 'react-redux'
import { ADMIN_THEME_NAME, ADMIN_THEME_NAME_CLASS } from 'services/theme/type'
import { IStore } from 'redux/type'

export interface IUseAdminThemeStyle {
  themeClassName: ADMIN_THEME_NAME_CLASS
  name: ADMIN_THEME_NAME
}
export const useAdminThemeStyle: any = (): IUseAdminThemeStyle => {
  const theme: ADMIN_THEME_NAME = useSelector(
    (state: IStore): ADMIN_THEME_NAME => state.theme.admin
  )

  return {
    themeClassName: ADMIN_THEME_NAME_CLASS[theme],
    name: theme
  }
}
