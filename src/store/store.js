import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filterSlice";
import sortingReducer from "../features/sortingSlice";
import paginationReducer from "../features/paginationSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    sorting: sortingReducer,
    pagination: paginationReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
