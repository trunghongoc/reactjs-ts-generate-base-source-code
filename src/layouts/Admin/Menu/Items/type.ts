import { ReactNode } from 'react'

export interface IProps {
  isExpandMenu: boolean
}

export interface IMenuItem {
  id: string
  label: string
  iconColor: string
  isActive?: boolean
  path?: string
  callback?: VoidFunction
}

export interface IMenuChildItem extends IMenuItem {
  icon?: ReactNode
}
export interface IMenuParentItem extends IMenuItem {
  icon: ReactNode
  path?: string
  callback?: VoidFunction
  children?: IMenuChildItem[]
}
