import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loader: false,
}
export const LoaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    onLoading: (state) => {
      state.loader = true
    },
    onLoadingOff: (state) => {
      state.loader = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { onLoading, onLoadingOff } = LoaderSlice.actions

export default LoaderSlice.reducer