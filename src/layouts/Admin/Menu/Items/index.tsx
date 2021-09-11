import { FC } from 'react'

import { Item } from './Item'

import { useAdminThemeStyle, IUseAdminThemeStyle } from 'hooks/useThemeStyle'

import { IProps } from './type'
import './style.scoped.scss'

import SpeedIcon from '@material-ui/icons/SpeedRounded'

export const Items: FC<IProps> = ({ isExpandMenu }): JSX.Element => {
  const { themeClassName }: IUseAdminThemeStyle = useAdminThemeStyle()

  return (
    <div className={`items ${themeClassName}`}>
      {/* {[...Array(20).keys()].map(
        (item: number): JSX.Element => (
          <Item
            key={item}
            Icon={SpeedIcon}
            iconColor="#8f5fe8"
            title="Dashboard"
            isActive={true}
            isExpandMenu={isExpandMenu}
          />
        )
      )} */}

      <Item
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
      />
    </div>
  )
}
