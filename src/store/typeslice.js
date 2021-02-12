import {createSlice} from '@reduxjs/toolkit'
const initialState = {
  text: '',
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
      state.text = action.payload
    }
  }
})

export default typeSlice.reducer
export const {setText,setUserInput} = typeSlice.actions