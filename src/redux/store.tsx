import { configureStore } from "@reduxjs/toolkit";
import errorSlice from "./slices/errorSlice";
import userSlice from "./slices/userSlice";
import projectSlice from "./slices/projectSlice";
import chatSlice from "./slices/chatSlice";

export const store = configureStore({
  reducer: {
    errorReducer: errorSlice,
    userReducer: userSlice,
    projectReducer: projectSlice,
    chatReducer: chatSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
