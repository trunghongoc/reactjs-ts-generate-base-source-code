import { LAYOUT_NAME } from 'layouts/type'

export enum ROUTER_NAME_LIST {
  HOME = 'HOME',
  LOGIN = 'LOGIN'
}

export interface ILayout {
  name: LAYOUT_NAME
  options?: any
}

export interface IRouterItem {
  component: any
  exact?: boolean
  path: string
  isPrivate?: boolean
  validate?: any
  layout: ILayout
  name: ROUTER_NAME_LIST
}
