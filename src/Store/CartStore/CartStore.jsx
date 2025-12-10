import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const CartStore = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existed = state.items.find((item) => item.id === action.payload.id);
      if (!existed) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existed = state.items.find((item) => item.id === action.payload.id);
      if (existed) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    increaseQuantity: (state, action) => {
      const existed = state.items.find((item) => item.id === action.payload.id);
      existed.quantity = existed.quantity + 1;
    },
    decreaseQuantity: (state, action) => {
      const existed = state.items.find((item) => item.id === action.payload.id);
      existed.quantity > 1
        ? (existed.quantity = existed.quantity - 1)
        : existed.quantity;
    },
  },
});

export const { addItem, removeItem, increaseQuantity , decreaseQuantity } = CartStore.actions;
export default CartStore.reducer;
