import { takeRight } from 'lodash'
import { createSlice } from '@reduxjs/toolkit'
import { IRouterState } from 'redux/type'
import { IRouterItemHistory } from 'redux/type'

export const routerSlice: any = createSlice({
  name: 'router',
  initialState: {
    current: null,
    histories: []
  },
  reducers: {
    setRouterConfig: (
      state: IRouterState,
      action: { payload: IRouterItemHistory }
    ): void => {
      state.current = action.payload
    },
    addToHistories: (
      state: IRouterState,
      action: { payload: IRouterItemHistory }
    ): void => {
      console.log({
        state,
        payload: action.payload
      })

      const maxHistoryItems: number = 20
      const [lastHistory] = takeRight(state.histories, 1)
      const checkIsSameHistory: any = (
        route1: IRouterItemHistory | undefined,
        route2: IRouterItemHistory
      ): boolean => {
        if (!route1) {
          return false
        }

        const pathRoute1: string = `${route1.location.pathname}${route1.location.search}${route1.location.hash}`
        const pathRoute2: string = `${route2.location.pathname}${route2.location.search}${route2.location.hash}`
        return pathRoute1 === pathRoute2
      }

      const isSameLastHistory: boolean = checkIsSameHistory(
        lastHistory,
        action.payload
      )

      if (!isSameLastHistory) {
        const newHistories: IRouterItemHistory[] = takeRight(
          [...state.histories, action.payload],
          maxHistoryItems
        )
        state.histories = newHistories
      }
    }
  }
})

export const { setRouterConfig, addToHistories } = routerSlice.actions

export default routerSlice.reducer
