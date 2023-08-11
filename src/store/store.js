import { configureStore } from "@reduxjs/toolkit";
import { ConfigReducer } from "./slice/configSlice";
import { AppReducer } from "./slice/appSlice";

const store = configureStore({
  reducer: {
    config: ConfigReducer,
    app: AppReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
