import { useMemo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { IRouterState, IStore, IRouterItemHistory } from 'redux/type'
import { IRouterItem } from 'router/type'
import { LAYOUT_NAME } from 'layouts/type'

import { defaultRouteItem } from 'router'

export interface IUseRouterHistories {
  current: IRouterItemHistory | null
  histories: IRouterItemHistory[]
  prevPage: IRouterItemHistory
  prevPagePath: string
  lastPageIsNotInsideAdmin: boolean
  goToAdminPreferPrevPage: VoidFunction
  goBackOrGoDashboard: VoidFunction
}
export const useRouterHistories: any = (): IUseRouterHistories => {
  const history: any = useHistory()
  const { current, histories }: IRouterState = useSelector(
    (state: IStore): IRouterState => state.router,
    shallowEqual
  )

  const defaultRouterItemHistory: IRouterItemHistory =
    useMemo((): IRouterItemHistory => {
      const defaultItem: IRouterItem = { ...defaultRouteItem }
      delete defaultItem.component
      return {
        ...defaultItem,
        location: {
          hash: '',
          key: uuid(),
          pathname: '/',
          search: ''
        }
      }
    }, [])

  const prevPage: IRouterItemHistory = useMemo((): IRouterItemHistory => {
    if (histories[histories.length - 2]) {
      return histories[histories.length - 2]
    }
    return defaultRouterItemHistory
  }, [histories, defaultRouterItemHistory])

  const getPathFromRouterItemHistory: any = (
    item: IRouterItemHistory
  ): string => {
    return `${item.location.pathname}​${item.location.search}​${item.location.hash}​`
  }

  const prevPagePath: string = useMemo((): string => {
    return getPathFromRouterItemHistory(prevPage)
  }, [prevPage])

  const lastPageIsNotInsideAdmin: boolean = useMemo((): boolean => {
    return prevPage.layout.name !== LAYOUT_NAME.ADMIN
  }, [prevPage])

  const goToAdminPreferPrevPage: any = (): void => {
    const path: string = lastPageIsNotInsideAdmin ? '/' : prevPagePath
    history.push(path)
  }
  const findClosestPrevPageInAdmin: any = (): IRouterItemHistory => {
    let item: IRouterItemHistory | null = null
    if (histories.length < 2) {
      return defaultRouterItemHistory
    }
    for (let i: number = histories.length - 2; i > 0; i--) {
      const currentItem: IRouterItemHistory = histories[i]
      if (currentItem.layout.name === LAYOUT_NAME.ADMIN) {
        item = currentItem
        break
      }
    }
    return item || defaultRouterItemHistory
  }
  const goBackOrGoDashboard: any = (): void => {
    const closestHistory: IRouterItemHistory = findClosestPrevPageInAdmin()
    const closestUrl: string = getPathFromRouterItemHistory(closestHistory)
    history.push(closestUrl)
  }
  return {
    current,
    histories,
    prevPage,
    prevPagePath,
    lastPageIsNotInsideAdmin,
    goToAdminPreferPrevPage,
    goBackOrGoDashboard
  }
}
