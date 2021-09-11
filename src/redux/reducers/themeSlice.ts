import { createSlice } from '@reduxjs/toolkit'

import { ADMIN_THEME_NAME } from 'services/theme/type'

export const themeSlice: any = createSlice({
  name: 'theme',
  initialState: {
    admin: ADMIN_THEME_NAME.light
  },
  reducers: {
    setAdminTheme: (
      state: any,
      action: { payload: ADMIN_THEME_NAME }
    ): void => {
      state.admin = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setAdminTheme } = themeSlice.actions

export default themeSlice.reducer
