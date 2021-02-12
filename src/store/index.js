import {combineReducers,configureStore} from '@reduxjs/toolkit';
import typeSlice from './typeslice';

const rootReducer = combineReducers({
  type: typeSlice
})

export const store = configureStore({
  reducer: rootReducer
})