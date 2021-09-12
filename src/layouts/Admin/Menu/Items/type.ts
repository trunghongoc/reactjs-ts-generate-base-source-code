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
  icon?: any
}
export interface IMenuParentItem extends IMenuItem {
  icon: any
  path?: string
  callback?: VoidFunction
  children?: IMenuChildItem[]
}
