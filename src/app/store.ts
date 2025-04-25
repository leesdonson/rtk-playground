import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
import postReducer from "./features/post/postSlice";
import commentReducer from "./features/comments/commentSlice";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
