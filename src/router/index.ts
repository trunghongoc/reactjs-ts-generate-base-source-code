import { lazy } from 'react'
import { IRouterItem, ROUTER_NAME_LIST } from './type'
import { LAYOUT_NAME } from 'layouts/type'

export const defaultRouteItem: IRouterItem = {
  path: '/',
  exact: true,
  component: lazy((): Promise<any> => import('pages/Home')),
  layout: { name: LAYOUT_NAME.ADMIN, options: {} },
  isPrivate: true,
  name: ROUTER_NAME_LIST.HOME
}

export const routers: IRouterItem[] = [
  {
    path: '/',
    exact: true,
    component: lazy((): Promise<any> => import('pages/Home')),
    layout: { name: LAYOUT_NAME.ADMIN, options: {} },
    isPrivate: true,
    name: ROUTER_NAME_LIST.HOME
  },
  {
    path: '/about',
    exact: true,
    component: lazy((): Promise<any> => import('pages/About')),
    layout: { name: LAYOUT_NAME.ADMIN, options: {} },
    isPrivate: true,
    name: ROUTER_NAME_LIST.HOME
  },
  {
    path: '/login',
    exact: true,
    component: lazy((): Promise<any> => import('pages/Login')),
    layout: { name: LAYOUT_NAME.AUTHEN },
    isPrivate: false,
    name: ROUTER_NAME_LIST.LOGIN
  },
  {
    path: '/register',
    exact: true,
    component: lazy((): Promise<any> => import('pages/Register')),
    layout: { name: LAYOUT_NAME.AUTHEN },
    isPrivate: false,
    name: ROUTER_NAME_LIST.REGISTER
  },
  {
    path: '*',
    exact: false,
    component: lazy((): Promise<any> => import('pages/Page404')),
    layout: { name: LAYOUT_NAME.AUTHEN },
    isPrivate: true,
    name: ROUTER_NAME_LIST.UNKNOW
  }
]
