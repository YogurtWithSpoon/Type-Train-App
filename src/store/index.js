import {combineReducers,configureStore} from '@reduxjs/toolkit';
import themeSlice from './themeslice';
import typeSlice from './typeslice';
import resultSlice from './resultslice';

const rootReducer = combineReducers({
  type: typeSlice,
  theme: themeSlice,
  results: resultSlice
})

export const store = configureStore({
  reducer: rootReducer
})