// src/store/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import eligibilityReducer from './eligibilitySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    eligibility: eligibilityReducer,
  },
})