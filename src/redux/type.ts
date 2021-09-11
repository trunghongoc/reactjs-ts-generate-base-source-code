import { IUser } from 'services/user/type'
import { IRouterItem } from 'router/type'
import { IRouterDomLocation } from 'services/router/type'
import { ADMIN_THEME_NAME } from 'services/theme/type'

export interface IUserState {
  currentUser: IUser | null
}

export interface IRouterItemHistory extends IRouterItem {
  location: IRouterDomLocation
}
export interface IRouterState {
  current: IRouterItemHistory | null
  histories: IRouterItemHistory[]
}

export interface IThemeState {
  admin: ADMIN_THEME_NAME
}
export interface IStore {
  user: IUserState
  router: IRouterState
  routerHistory: any
  theme: IThemeState
}
