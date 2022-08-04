import { configureStore } from '@reduxjs/toolkit'
import identityReducer from '../features/identity/identitySlice'

export const store = configureStore({
  reducer: {
    identity: identityReducer,
  },
})