import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../utils/userSlice";

const appstore = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default appstore;
