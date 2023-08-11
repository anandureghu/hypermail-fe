import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fields: [],
  files: {
    image: null,
    font: [],
    data: null,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setFields: (state, action) => {
      const { fields } = action.payload;
      state.fields = fields;
    },
    setFiles: (state, action) => {
      const { files } = action.payload;
      state.files = files;
    },
  },
  extraReducers: {},
});

export const { setFields, setFiles } = appSlice.actions;
export const AppReducer = appSlice.reducer;
