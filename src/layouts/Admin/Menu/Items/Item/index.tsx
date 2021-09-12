import {
  FC,
  useMemo,
  useState,
  useRef,
  useImperativeHandle,
  forwardRef
} from 'react'
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
  const menuRef: any = useRef(null)
  const subMenuRef: any = useRef(null)
  const Icon: any = item.icon

  const [subMenuStyle, setSubMenuStyle] = useState({})

  const hasAtLeast1Child: boolean = useMemo((): boolean => {
    return item?.children ? item.children?.length > 0 : false
  }, [item])

  const isShowExpandIcon: boolean = useMemo((): boolean => {
    return hasAtLeast1Child && !item.path && !item.callback && isExpandMenu
  }, [item, hasAtLeast1Child, isExpandMenu])

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
    if (hasAtLeast1Child && !item.path && !item.callback && isExpandMenu) {
      setIsExpandChildren(!isExpandChildren)
      return
    }

    execCallbackOrRedirect(item)
  }

  const handleOnHover: any = (event: any): void => {
    if (isExpandMenu) {
      return
    }

    const bound: any = menuRef.current.getBoundingClientRect()
    setSubMenuStyle({ top: bound.top })
    subMenuRef.current.getBounding()
  }

  return (
    <div className={itemClassName} onMouseEnter={handleOnHover} ref={menuRef}>
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

      <SubMenu
        ref={subMenuRef}
        item={item}
        isExpandChildren={isExpandChildren}
        subMenuStyle={subMenuStyle}
        isExpandMenu={isExpandMenu}
        execCallbackOrRedirect={execCallbackOrRedirect}
        handleOnClickParentMenu={handleOnClickParentMenu}
      />
    </div>
  )
}

interface IBoundingClientRect {
  top?: number
  bottom?: number
}
interface ISubMenuProps {
  item: IMenuParentItem
  isExpandChildren: boolean
  subMenuStyle: IBoundingClientRect
  isExpandMenu: boolean
  execCallbackOrRedirect: (child: IMenuChildItem) => void
  handleOnClickParentMenu: (item: IMenuParentItem) => void
}
let SubMenu: any = (
  {
    item,
    isExpandChildren,
    subMenuStyle,
    isExpandMenu,
    execCallbackOrRedirect,
    handleOnClickParentMenu
  }: ISubMenuProps,
  ref: any
): JSX.Element => {
  const subMenuRef: any = useRef()
  const [bound, setBound] = useState<IBoundingClientRect>({})

  const newForcePosition: any | null = useMemo((): any | null => {
    const windowHeight: number = window.innerHeight
    const isOverFlowBottom: boolean = bound?.bottom
      ? bound.bottom > windowHeight + 10
      : false

    return isOverFlowBottom ? { bottom: 10 } : null
  }, [bound])

  const hasNoChildren: boolean = useMemo((): boolean => {
    return !item.children || !item.children.length
  }, [item])

  const className: string = useMemo((): string => {
    if (hasNoChildren) {
      return 'item__sub-menu'
    }

    return `item__sub-menu ${isExpandChildren ? '-expand-sub-menu' : ''}`
  }, [isExpandChildren, hasNoChildren])

  const style: IBoundingClientRect = useMemo((): IBoundingClientRect => {
    if (newForcePosition) {
      return newForcePosition
    }

    return subMenuStyle
  }, [subMenuStyle, newForcePosition])

  useImperativeHandle(ref, () => ({
    getBounding: () => {
      const updatePosition: any = (): void => {
        const bound: any = subMenuRef.current.getBoundingClientRect()
        setBound(bound)
      }

      setTimeout((): void => {
        updatePosition()
      }, 100)
    }
  }))

  return (
    <div className={className} style={style} ref={subMenuRef}>
      {!isExpandMenu && (
        <div
          className={`item__sub-menu__parent-label ${
            hasNoChildren ? '-has-no-children' : ''
          }`}
          onClick={(): void => handleOnClickParentMenu(item)}
        >
          {item.label}
        </div>
      )}

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
  )
}
SubMenu = forwardRef(SubMenu)
