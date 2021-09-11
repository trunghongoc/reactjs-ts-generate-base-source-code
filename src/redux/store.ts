import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'

import userSlice from './reducers/userSlice'
import routerSlice from './reducers/routerSlice'

// const customizedMiddleware: any = getDefaultMiddleware({
//   serializableCheck: false
// })

const history: any = createBrowserHistory()
const middleware: any = [routerMiddleware(history), thunk]

const persistConfig: any = {
  key: 'root',
  storage,
  whitelist: ['user', 'router']
}

const persistedReducer: any = persistReducer(
  persistConfig,
  combineReducers({
    user: userSlice,
    router: routerSlice,
    routerHistory: connectRouter(history)
  })
)

export default configureStore({
  reducer: persistedReducer,
  middleware
})

export { history }
