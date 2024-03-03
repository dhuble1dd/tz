import { configureStore } from "@reduxjs/toolkit";
import RateReducer from "./reducer"


export const store = configureStore({
  reducer: RateReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch