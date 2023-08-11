import { createSlice } from "@reduxjs/toolkit";
import { emptyText } from "../../utils/constants";

const initialState = {
  texts: [],
  file: {
    nameKey: "",
    index: "",
  },
  font: {
    external: false,
  },
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
    setFile: (state, action) => {
      const { key, value } = action.payload;
      state.file = {
        ...state.file,
        [key]: value,
      };
    },
  },
  extraReducers: {},
});

export const { addText, setTexts, setFile } = configSlice.actions;
export const ConfigReducer = configSlice.reducer;
