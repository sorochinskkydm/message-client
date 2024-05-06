import { configureStore } from "@reduxjs/toolkit";
import errorSlice from "./slices/errorSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    errorReducer: errorSlice,
    userReducer: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
