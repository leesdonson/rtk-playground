import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EditPostData, Init, NewPostData } from "./types";
import postServices from "./postService";

const initialState: Init = {
  posts: [],
  post: null,
  loading: false,
  error: "",
  message: "",
};

// Thunk Actions

//  Create Post
export const createPost = createAsyncThunk(
  "post/create",
  async (data: NewPostData, thunkAPI) => {
    try {
      return await postServices.createPost(data);
    } catch (error) {
      const err = error as { data: { message: string } };
      return thunkAPI.rejectWithValue(err.data.message);
    }
  }
);

//Get Posts
export const getPosts = createAsyncThunk("post/get", async (_, thunkAPI) => {
  try {
    return await postServices.getPosts();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

//Get post
export const getPost = createAsyncThunk(
  "post/get-details",
  async (id: string, { rejectWithValue }) => {
    try {
      return postServices.getPost(id);
    } catch (error) {
      const err = error as { data: { message: string } };
      return rejectWithValue(err.data.message);
    }
  }
);

//Edit Post
export const editPost = createAsyncThunk(
  "post/edit",
  async (data: EditPostData, thunkAPI) => {
    try {
      return await postServices.editPost(data);
    } catch (error) {
      const err = error as { data: { message: string } };
      return thunkAPI.rejectWithValue(err.data.message);
    }
  }
);

// Delete Post
export const deletePost = createAsyncThunk(
  "post/delete",
  async (id: string, thunkAPI) => {
    try {
      return await postServices.deletePost(id);
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

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.message = action.payload?.message;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(getPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = false;
        // const post = state.posts.find((post) => post.id === action.payload.id);
        state.post = action.payload;
        console.log(action.payload);
      })
      .addCase(getPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(editPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      })
      .addCase(editPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        // state.posts = action.payload;
        console.log(action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
