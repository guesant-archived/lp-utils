import { configureStore } from "@reduxjs/toolkit";
import compactManagerReducer from "./compactManagerSlice";

const store = configureStore({
  reducer: {
    compactManager: compactManagerReducer,
  },
});

export default store;
