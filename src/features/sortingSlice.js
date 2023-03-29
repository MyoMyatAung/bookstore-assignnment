import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "title",
};

export const sortingSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortBy } = sortingSlice.actions;

export default sortingSlice.reducer;
