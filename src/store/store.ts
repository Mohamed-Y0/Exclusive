import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/components/cart/cartSlice";

export const store = configureStore({
  reducer: {
    // Wee Add All Reducers Here..
    cart: cartReducer,
  },
});
