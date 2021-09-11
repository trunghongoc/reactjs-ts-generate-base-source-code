import { FC } from 'react'

import { useAdminThemeStyle, IUseAdminThemeStyle } from 'hooks/useThemeStyle'

import { Card } from './Card'

import './style.scoped.scss'

const Home: FC = (): JSX.Element => {
  const { themeClassName }: IUseAdminThemeStyle = useAdminThemeStyle()

  return (
    <div className={`home-page ${themeClassName}`}>
      <div className="header">Home page</div>

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
        (item: number): JSX.Element => (
          <Card key={item} />
        )
      )}
    </div>
  )
}

export default Home
