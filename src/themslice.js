import { createSlice } from "@reduxjs/toolkit";

const themeslice = createSlice({
  name: "theme",
  initialState: {
    theme: localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light",
  },
  reducers: {
    themeChange: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      // Update the local storage with the new theme
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { themeChange } = themeslice.actions;
export default themeslice.reducer;
