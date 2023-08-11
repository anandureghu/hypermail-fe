import { createSlice } from "@reduxjs/toolkit";

const emptyText = {
  key: "",
  position: {
    x: "",
    y: "",
    max: "",
  },
};

const initialState = {
  texts: [
    {
      ...emptyText,
    },
  ],
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    addText: (state) => {
      state.texts = [...state.texts, { ...emptyText }];
    },
  },
  extraReducers: {},
});

export const { addText } = configSlice.actions;
export const ConfigReducer = configSlice.reducer;
