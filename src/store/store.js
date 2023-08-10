import { configureStore } from "@reduxjs/toolkit";
import { ConfigReducer } from "./slice/configSlice";

const store = configureStore({
  reducer: {
    config: ConfigReducer,
  },
});

export default store;
