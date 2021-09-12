import { FC, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { IProps } from './type'
import { IMenuChildItem, IMenuParentItem } from '../type'

import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import './style.scoped.scss'

export const Item: FC<IProps> = ({
  item,
  isExpandMenu,
  themeClassName
}): JSX.Element => {
  const history: any = useHistory()
  const [isExpandChildren, setIsExpandChildren] = useState<boolean>(false)
  const Icon: any = item.icon

  const hasAtLeast1Child: boolean = useMemo((): boolean => {
    return item?.children ? item.children?.length > 0 : false
  }, [item])

  const isShowExpandIcon: boolean = useMemo((): boolean => {
    return hasAtLeast1Child && !item.path && !item.callback
  }, [item, hasAtLeast1Child])

  const itemClassName: string = useMemo((): string => {
    const itemExpandClassName: string = isShowExpandIcon
      ? '-is-show-expand-icon'
      : ''

    return `item ${themeClassName} ${itemExpandClassName} ${
      item.isActive ? '-active' : ''
    } ${isExpandMenu ? '' : '-is-collapsed'}`
  }, [item, isExpandMenu, themeClassName, isShowExpandIcon])

  const execCallbackOrRedirect: any = (
    item: IMenuChildItem | IMenuParentItem
  ): void => {
    if (item.callback) {
      item.callback()
      return
    }

    if (item.path) {
      history.push(item.path)
      return
    }
  }
  const handleOnClickParentMenu: any = (): void => {
    if (hasAtLeast1Child && !item.path && !item.callback) {
      setIsExpandChildren(!isExpandChildren)
      return
    }

    execCallbackOrRedirect(item)
  }

  return (
    <div className={itemClassName}>
      <div className="item__dir" onClick={handleOnClickParentMenu}>
        <span className="item__dir__icon">
          <Icon style={{ color: item.iconColor }} />
        </span>

        <span className="item__dir__title">{item.label}</span>

        {isShowExpandIcon && (
          <span className="item__dir__expand-icon">
            <ExpandMoreIcon />
          </span>
        )}
      </div>

      <div
        className={`item__sub-menu ${
          isExpandChildren ? '-expand-sub-menu' : ''
        }`}
      >
        {item.children?.map(
          (child: IMenuChildItem, index: number): JSX.Element => (
            <div
              key={index}
              className="item__sub-menu__line"
              onClick={() => execCallbackOrRedirect(child)}
            >
              <span>{child.label}</span>
            </div>
          )
        )}
      </div>
    </div>
  )
}
