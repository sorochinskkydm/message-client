import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isChatActive: false,
  chatId: "",
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setChatState(state, action: PayloadAction<any>) {
      state.isChatActive = action.payload.isChatActive;
      state.chatId = action.payload.chatId;
    },
  },
});

export const { setChatState } = chatSlice.actions;
export default chatSlice.reducer;
