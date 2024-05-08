import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../utils/api.config";
import { IUser } from "../../interfaces/interface";

export const getUserData = createAsyncThunk("setUserInfo", async () => {
  const storageUserId = localStorage.getItem("userId");
  const response = await instance.get(
    `http://localhost:8080/api/users/${storageUserId}`
  );
  return response.data;
});

interface IUserWrapper {
  userInfo: IUser;
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
      state.userInfo = action.payload;
    });
  },
});

// export const {} = userSlice.actions;
export default userSlice.reducer;
