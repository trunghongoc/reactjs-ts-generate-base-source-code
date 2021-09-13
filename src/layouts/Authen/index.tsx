import { FC } from 'react'

import { IProps } from './type'

import logoIcon from 'imgs/logo_200x200.png'

import './style.scoped.scss'

export const AuthenLayout: FC<IProps> = ({ children }: IProps): JSX.Element => {
  return (
    <div className="authen-layout">
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
