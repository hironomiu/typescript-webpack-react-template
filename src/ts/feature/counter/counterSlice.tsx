import { createSlice } from '@reduxjs/toolkit'

type state = {
  value: number
  status: string
}
const initialState: state = {
  value: 0,
  status: 'idle',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1
    },
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { decrement, increment } = counterSlice.actions
export const selectCount = (state: any) => state.counter.value

export default counterSlice.reducer
