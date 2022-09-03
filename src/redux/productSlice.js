import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: {},
  }
})

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer