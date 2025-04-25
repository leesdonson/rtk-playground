import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentServices from "./commentService";
import { EditComment } from "./types";

interface Reply {
  id: string;
  description: string;
  date: string;
  replyBy: string;
}
interface Comment {
  id: string;
  description: string;
  date: string;
  commentBy: string;
  like: number;
  reply: Reply[];
}

interface InitialProps {
  comment: Comment[];
  loading: boolean;
  error: string | null;
  message: string;
}

const initialState: InitialProps = {
  comment: [],
  loading: false,
  error: null,
  message: "",
};

// Thunk Actions

// add comment
const addComment = createAsyncThunk(
  "comment/addComment",
  async (data: { postId: string; description: string }, thunkAPI) => {
    try {
      return await commentServices.addComment(data);
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

// get comment
const getComments = createAsyncThunk(
  "comment/getComments",
  async (postId: string, thunkAPI) => {
    try {
      return await commentServices.getComments(postId);
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

//edit comment
const editComment = createAsyncThunk(
  "comment/editComment",
  async (data: EditComment, thunkAPI) => {
    try {
      return await commentServices.editComment(data);
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

//delete comment
const deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async (data: { postId: string; commentId: string }, thunkAPI) => {
    try {
      return await commentServices.deleteComment(data);
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

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      })
      .addCase(addComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(getComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      })
      .addCase(getComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(editComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(editComment.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      })
      .addCase(editComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(deleteComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
