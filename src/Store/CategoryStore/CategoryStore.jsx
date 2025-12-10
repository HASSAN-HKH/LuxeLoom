import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import all_product from "../../Components/Assets/all_product";

const CategoryStore = createSlice({
  name: "Category",
  initialState: {
    products: all_product,
    categoryProducts: all_product,
  },
  reducers: {
    filterProductsByCategory: (state, action) => {
      state.categoryProducts = state.products.filter((item) => {
        return item.category === action.payload;
      });
    },
  },
});

export const { filterProductsByCategory } = CategoryStore.actions;
export default CategoryStore.reducer;
