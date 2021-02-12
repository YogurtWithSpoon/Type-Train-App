import {createSlice} from '@reduxjs/toolkit'
import {getDefaultTheme} from '../helpers'

const initialState = {
  theme: getDefaultTheme()
}

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    switchTheme(state,action){
      state.theme = action.payload
    },
  }
})

export default themeSlice.reducer
export const {switchTheme} = themeSlice.actions