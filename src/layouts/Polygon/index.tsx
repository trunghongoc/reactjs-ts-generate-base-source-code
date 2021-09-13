import { FC } from 'react'

import { useAdminThemeStyle, IUseAdminThemeStyle } from 'hooks/useThemeStyle'

import { IProps } from './type'

import logoIcon from 'imgs/logo_200x200.png'

import './style.scoped.scss'

export const PolygonLayout: FC<IProps> = ({
  children
}: IProps): JSX.Element => {
  const { themeClassName }: IUseAdminThemeStyle = useAdminThemeStyle()

  return (
    <div className={`polygon-layout ${themeClassName}`}>
      <div className="left">
        <div className="left__content">
          <div className="left__content__body">
            <div className="header">
              <img src={logoIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="right">{children}</div>
    </div>
  )
}
