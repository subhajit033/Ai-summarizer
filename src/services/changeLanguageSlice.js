import { createSlice } from "@reduxjs/toolkit";

const changeLanguageSlice = createSlice({
  name: "language",
  initialState: {
    translatedText: "",
  },
  reducers: {
    addText: (state, action) => {
      state.translatedText = action.payload;
    },
  },
});
export const {addText} = changeLanguageSlice.actions;
export default changeLanguageSlice.reducer;
