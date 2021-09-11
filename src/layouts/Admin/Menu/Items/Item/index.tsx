import { FC } from 'react'

import { IProps } from './type'
import './style.scoped.scss'

export const Item: FC<IProps> = ({
  Icon,
  iconColor,
  title,
  isActive,
  isExpandMenu,
  themeClassName
}): JSX.Element => {
  return (
    <div
      className={`item ${themeClassName} ${isActive ? '-active' : ''} ${
        isExpandMenu ? '' : '-is-collapsed'
      }`}
    >
      <div className="item__dir">
        <span className="item__dir__icon">
          <Icon style={{ color: iconColor }} />
        </span>

        <span className="item__dir__title">{title}</span>
      </div>
    </div>
  )
}
