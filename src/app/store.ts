import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import appReducer from "./reducer/reducer"

export const store = configureStore({
  reducer: appReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
