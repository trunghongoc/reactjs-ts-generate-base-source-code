import { Dispatch, FC } from 'react'

export interface IProps {
  isExpandMenu: boolean
  setIsExpandMenu: Dispatch<any>
  children?: FC
}
