import {createSlice} from '@reduxjs/toolkit'
import {getResults} from '../helpers'

const initialState = {
  results: getResults()
}

const resultSlice = createSlice({
  name: "resultSlice",
  initialState,
  reducers: {
    addResult(state,action){
      state.results.push(action.payload)
    },
  }
})

export default resultSlice.reducer
export const {addResult,setResult} = resultSlice.actions