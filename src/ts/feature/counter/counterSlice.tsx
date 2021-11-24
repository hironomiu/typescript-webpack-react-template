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
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { increment } = counterSlice.actions
export const selectCount = (state: any) => state.counter.value

export default counterSlice.reducer
