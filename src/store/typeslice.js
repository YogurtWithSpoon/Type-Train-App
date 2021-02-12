import {createSlice} from '@reduxjs/toolkit'
const initialState = {
  text: '',
  userInput: '',
  symbols: 0,
  sec: 0,
  started: false,
  finished: false
}
const typeSlice = createSlice({
  name: "typeslice",
  initialState,
  reducers: {
    setText(state,action){
      state.userInput = action.payload
    }
  }
})

export default typeSlice.reducer
export const {setText} = typeSlice.actions