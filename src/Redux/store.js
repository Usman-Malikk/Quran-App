import { configureStore } from '@reduxjs/toolkit'
import LoaderReducer  from './Slices/loaderSlice'
import ListingReducer from './Slices/ListingSlice'

export const store = configureStore({
  reducer: {
    loader:LoaderReducer,
    listing:ListingReducer
  },
})