import { configureStore } from "@reduxjs/toolkit";
import {searchSlice} from "./Search.slice";
import {useSelector} from "react-redux"


export const store = configureStore({
  reducer: {
    [searchSlice.name]:searchSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector = useSelector<RootState>