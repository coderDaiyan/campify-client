import { createSlice } from "@reduxjs/toolkit";
import { TCategory } from "../../../types/category";

interface categoryState {
  categories: Array<TCategory>;
}

const initialState: categoryState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    loadCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { loadCategories } = categorySlice.actions;

export default categorySlice.reducer;
