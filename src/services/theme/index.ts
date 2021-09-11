import store from 'redux/store'
import { setAdminTheme } from 'redux/reducers/themeSlice'

export class RouterService {
  setAdminTheme(themeName: any): void {
    store.dispatch(setAdminTheme(themeName))
  }
}

export default new RouterService()
