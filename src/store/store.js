import { configureStore } from '@reduxjs/toolkit'
import listReducer from './ratingSlice'

export default configureStore({
  reducer: { list: listReducer },
})