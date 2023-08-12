import { createSlice } from "@reduxjs/toolkit";
import { emptyFont, emptyText } from "../../utils/constants";

const initialState = {
  texts: [],
  file: {
    nameKey: "",
    index: false,
  },
  font: {
    external: false,
    fonts: [],
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
    addFont: (state) => {
      state.font = {
        ...state.font,
        fonts: [...state.font.fonts, emptyFont],
      };
    },
    setFont: (state, action) => {
      const { font } = action.payload;
      state.font = font;
    },
  },
  extraReducers: {},
});

export const { addText, setTexts, setFile, addFont, setFont } =
  configSlice.actions;
export const ConfigReducer = configSlice.reducer;
