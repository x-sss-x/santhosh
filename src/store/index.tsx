import { configureStore } from "@reduxjs/toolkit";
import {searchSlice} from "./Search.slice";
import {useSelector} from "react-redux"
import {feedbackSclice} from "./Feedback.silce"
import { ServiceHistory } from "./ServiceHistory.slice";
import { booking } from "./BookServiceProvider.slice";

export const store = configureStore({
  reducer: {
    [searchSlice.name]:searchSlice.reducer,
    [feedbackSclice.name]:feedbackSclice.reducer,
    [ServiceHistory.name]:ServiceHistory.reducer,
    [booking.name]:booking.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector = useSelector<RootState>