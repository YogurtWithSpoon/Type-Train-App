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
    setUserInput(state,action){
      state.userInput = action.payload
    },
    setReset: state => initialState,
    setText(state,action){
      state.text = action.payload
    },
    setSymbols(state,action){
      state.symbols = action.payload
    },
    setStart(state,action){
      state.started = action.payload;
    },
    setSec(state){
      state.sec = state.sec + 1;
    },
    setFinish(state,action){
      state.finished = action.payload;
    },
  }
})

export default typeSlice.reducer
export const {setText,setUserInput,setSymbols,setStart,setFinish,setSec,setReset} = typeSlice.actions