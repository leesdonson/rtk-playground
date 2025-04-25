import { createSlice } from "@reduxjs/toolkit";

enum Role {
  ADMIN = "admin",
  USER = "user",
}
interface User {
  user: {
    username: string;
    email: string;
    role: Role;
  };
}

const initialState: User = {
  user: {
    username: "me",
    email: "",
    role: Role.USER,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.user = { ...state.user, ...action.payload };
    },

    logout: (state) => {
      state.user = {
        username: "",
        email: "",
        role: Role.USER,
      };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
