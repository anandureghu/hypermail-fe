import { createSlice } from "@reduxjs/toolkit";
import { emptyText } from "../../utils/constants";

const initialState = {
  texts: [],
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    addText: (state) => {
      state.texts = [...state.texts, emptyText];
    },
    setTexts: (state, action) => {
      const { texts } = action.payload;
      state.texts = texts;
    },
  },
  extraReducers: {},
});

export const { addText, setTexts } = configSlice.actions;
export const ConfigReducer = configSlice.reducer;
