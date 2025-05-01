import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SignIn, SignUp } from "./types";
import authServices from "./authService";

export type User = {
  id: string;
  name: string;
  email: string;
  thumbnail?: string;
};
interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  message: string;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  message: "",
};

// Thunk Actions

// Sign Up
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (data: SignUp, thunkAPI) => {
    try {
      return await authServices.signUp(data);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Sign In
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (data: SignIn, thunkAPI) => {
    try {
      return await authServices.signIn(data);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Sign Out
export const signOut = createAsyncThunk("auth/signOut", async (_, thunkAPI) => {
  try {
    return await authServices.signOut();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.user = action.payload?.data;
        state.message = action.payload.message;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error Occured";
        console.log(action.error);
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action.payload.message);
        state.user = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(signOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.user = null;
        state.message = action.payload.message;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        console.log(action.payload);
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
