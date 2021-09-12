import { FC, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Item } from './Item'

import { useAdminThemeStyle, IUseAdminThemeStyle } from 'hooks/useThemeStyle'

import { IProps, IMenuParentItem } from './type'
import './style.scoped.scss'

import SpeedIcon from '@material-ui/icons/SpeedRounded'

export const Items: FC<IProps> = ({ isExpandMenu }): JSX.Element => {
  const { themeClassName }: IUseAdminThemeStyle = useAdminThemeStyle()
  const [items] = useState<IMenuParentItem[]>([
    {
      id: uuid(),
      label: 'Dashboard',
      icon: SpeedIcon,
      iconColor: '#8f5fe8',
      isActive: true,
      path: '/'
    },
    {
      id: uuid(),
      label: 'About',
      icon: SpeedIcon,
      iconColor: '#fc424a',
      isActive: false,
      path: '/about'
    },
    {
      id: uuid(),
      label: 'Tables',
      icon: SpeedIcon,
      iconColor: '#ffab00',
      isActive: false,
      children: [
        {
          id: uuid(),
          label: '1st table',
          icon: SpeedIcon,
          iconColor: '#ffab00',
          isActive: false
        },
        {
          id: uuid(),
          label: '2nd table',
          icon: SpeedIcon,
          iconColor: '#ffab00',
          isActive: false
        },
        {
          id: uuid(),
          label: '3rd table',
          iconColor: '#ffab00',
          isActive: false
        },
        {
          id: uuid(),
          label: '4th table',
          icon: SpeedIcon,
          iconColor: '#ffab00',
          isActive: false
        }
      ]
    },
    {
      id: uuid(),
      label: 'Audit',
      icon: SpeedIcon,
      iconColor: '#0090e7',
      isActive: false,
      callback: (): void => alert('callback function')
    }
  ])

  return (
    <div className={`items ${themeClassName}`}>
      {items.map(
        (item: IMenuParentItem, index: number): JSX.Element => (
          <Item
            key={index}
            item={item}
            themeClassName={themeClassName}
            isExpandMenu={isExpandMenu}
          />
        )
      )}

      {/* <Item
        Icon={SpeedIcon}
        iconColor="#8f5fe8"
        title="Dashboard"
        isActive={true}
        isExpandMenu={isExpandMenu}
        themeClassName={themeClassName}
      />

      <Item
        Icon={SpeedIcon}
        iconColor="#ffab00"
        title="Tables"
        isActive={false}
        isExpandMenu={isExpandMenu}
        themeClassName={themeClassName}
      />

      <Item
        Icon={SpeedIcon}
        iconColor="#0090e7"
        title="Audit"
        isActive={false}
        isExpandMenu={isExpandMenu}
        themeClassName={themeClassName}
      /> */}
    </div>
  )
}
