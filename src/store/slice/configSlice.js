import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const {} = configSlice.actions;
export const ConfigReducer = configSlice.reducer;
