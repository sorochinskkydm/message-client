import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../utils/api.config";

export const getUserData = createAsyncThunk("setUserInfo", async () => {
  const storageUserId = localStorage.getItem("userId");
  const response = await instance.get(
    `http://localhost:8080/api/users/${storageUserId}`
  );
  return response.data;
});

interface IuserInfo {
  id: string;
  name: string;
  surname: string;
  position: string;
  isAdmin: boolean;
  birthDate: Date;
  photoPath: string;
  username: string;
  email: string;
  password: string;
  publicKey: string;
  privateKey: string;
}

interface IUserWrapper {
  userInfo: IuserInfo;
}

const initialState: IUserWrapper = {
  userInfo: {
    id: "",
    name: "",
    surname: "",
    position: "",
    isAdmin: false,
    birthDate: new Date(),
    photoPath: "",
    username: "",
    email: "",
    password: "",
    publicKey: "",
    privateKey: "",
  },
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      console.log(action.payload, "<==========payload");
      // state.userInfo = action.payload;
      state.userInfo = action.payload;
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
