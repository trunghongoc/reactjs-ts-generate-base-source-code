import { pick } from 'lodash'
import store from 'redux/store'
import { setRouterConfig, addToHistories } from 'redux/reducers/routerSlice'

import { IRouterItem } from 'router/type'
import { IRouterDomLocation } from './type'

export class RouterService {
  handleAfterRouteEnter(
    currentRoute: IRouterItem,
    location: IRouterDomLocation
  ): void {
    setTimeout((): void => {
      const item: any = pick(currentRoute, [
        'path',
        'exact',
        'isPrivate',
        'layout',
        'name'
      ])

      item.location = location
      store.dispatch(setRouterConfig(item))
      store.dispatch(addToHistories(item))
    })
  }
}

export default new RouterService()
