import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IChat } from "../../interfaces/interface";
import { instance } from "../../utils/api.config";

interface IChatWrapper {
  chatInfo: IChat[];
  activeChatId: string;
}

export const getChatsData = createAsyncThunk("setChatData", async () => {
  const storageUserId = localStorage.getItem("userId");
  const response = await instance.get(
    `http://localhost:8080/api/chats/${storageUserId}`
  );
  return response.data;
});

const initialState: IChatWrapper = {
  chatInfo: [],
  activeChatId: "",
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setActiveChatId(state, action) {
      state.activeChatId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChatsData.fulfilled, (state, action) => {
      state.chatInfo = action.payload;
    });
  },
});

export const { setActiveChatId } = chatSlice.actions;
export default chatSlice.reducer;
