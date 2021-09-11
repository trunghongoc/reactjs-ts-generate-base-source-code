import { ReactNode } from 'react'

export interface IProps {
  Icon: ReactNode
  iconColor: string
  title: string
  isActive: boolean
  children?: any
  isExpandMenu: boolean
  themeClassName: string
}
