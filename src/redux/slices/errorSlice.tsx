import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IinitialState {
  message: string;
  caughtError: boolean;
}

export const setTimeoutForError = createAsyncThunk(
  "setTimeoutForError",
  async (parameters) => {
    setTimeout(() => {}, 2000);
  }
);

const initialState: IinitialState = {
  message: "",
  caughtError: false,
};

const errorSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setErrorMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    setCaughtError(state, action: PayloadAction<boolean>) {
      state.caughtError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setTimeoutForError.fulfilled, (state) => {
      state.caughtError = false;
    });
  },
});

export const { setErrorMessage, setCaughtError } = errorSlice.actions;
export default errorSlice.reducer;
