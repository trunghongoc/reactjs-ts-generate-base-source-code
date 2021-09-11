export enum ADMIN_THEME_NAME {
  light = 'light',
  dark = 'dark'
}

export enum ADMIN_THEME_NAME_CLASS {
  light = '-theme-light',
  dark = '-theme-dark'
}

export interface ITheme {
  admin: ADMIN_THEME_NAME
}
