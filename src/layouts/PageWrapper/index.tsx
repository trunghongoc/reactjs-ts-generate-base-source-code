import { Component } from 'react'

import RouterService from 'services/router'

import { IProps } from './type'

export class PageWrapper extends Component<IProps> {
  constructor(props: IProps) {
    super(props)

    this.handleBeforeRender()
  }

  handleBeforeRender = () => {
    RouterService.handleAfterRouteEnter(
      this.props.routeConfig,
      this.props.location
    )
  }

  render() {
    const { Page, pageProps } = this.props

    return <>{Page ? <Page {...pageProps} /> : <span />}</>
  }
}
