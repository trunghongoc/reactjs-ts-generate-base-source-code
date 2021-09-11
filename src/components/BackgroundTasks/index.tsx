import { FC, useEffect } from 'react'
import BackgroundService from 'services/background'

import { ThemeStyle } from './ThemeStyle'

export const BackgroundTasks: FC = (): JSX.Element => {
  useEffect((): void => {
    BackgroundService.watch()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <ThemeStyle />
    </div>
  )
}
