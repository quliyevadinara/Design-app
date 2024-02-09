import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  blogs: [],
  error: "",
};

export const fetchBlogs = createAsyncThunk("blog/fetchBlogs", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
});

const blogsSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBlogs.fulfilled, (state,action) => {
      state.loading = false;
      state.blogs = action.payload;
      state.error = "";
    });
    builder.addCase(fetchBlogs.rejected, (state,action) => {
      state.loading = false;
      state.blogs = [];
      state.error = action.error.message;
    });
  },
});

export default blogsSlice.reducer;
