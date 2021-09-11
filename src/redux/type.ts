import { IUser } from 'services/user/type'
import { IRouterItem } from 'router/type'
import { IRouterDomLocation } from 'services/router/type'

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

export interface IStore {
  user: IUserState
  router: IRouterState
  routerHistory: any
}
