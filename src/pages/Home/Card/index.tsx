import { FC } from 'react'

import UserService from 'services/user'

import { useAdminThemeStyle, IUseAdminThemeStyle } from 'hooks/useThemeStyle'

import './style.scoped.scss'

export const Card: FC = (): JSX.Element => {
  const { themeClassName }: IUseAdminThemeStyle = useAdminThemeStyle()

  return (
    <div className={`card ${themeClassName}`}>
      <div className="title">Basic Table</div>
      <span
        className="link"
        onClick={(): any => UserService.getCurrentUser({ name: 'trunghongoc' })}
      >
        Click to fetch API (run user service)
      </span>
    </div>
  )
}
