import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  replies: [],
  loading: false,
  error: null,
  message: "",
};

const replySlice = createSlice({
  name: "reply",
  initialState,
  reducers: {},
});

export const {} = replySlice.actions;
export default replySlice.reducer;
