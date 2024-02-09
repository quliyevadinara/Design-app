import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "./blogsSlice";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = configureStore({
  reducer: blogsSlice,
  middleware: [thunk, logger],
});
export default store;
