import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
