import { FC, useLayoutEffect } from 'react'

import RouterService from 'services/router'

import { IProps } from './type'

export const PageWrapper: FC<IProps> = ({
  Page,
  pageProps,
  routeConfig,
  location
}: IProps): JSX.Element => {
  useLayoutEffect((): void => {
    RouterService.handleAfterRouteEnter(routeConfig, location)
  }, [routeConfig, location])

  return Page ? <Page {...pageProps} /> : <span />
}
