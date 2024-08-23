import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../utils/userSlice";
import movieSlice from "./movieSlice";

const appstore = configureStore({
  reducer: {
    user: useReducer,
    movies: movieSlice,
  },
});

export default appstore;
