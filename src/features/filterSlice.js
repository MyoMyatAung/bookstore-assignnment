import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = filterSlice.actions;

export default filterSlice.reducer;
