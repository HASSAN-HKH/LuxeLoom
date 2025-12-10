import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./Store/CategoryStore/CategoryStore";
import CartReducer from "./Store/CartStore/CartStore";

const store = configureStore({
  reducer: {
    Category: CategoryReducer,
    Cart: CartReducer,
  },
});

export default store;
