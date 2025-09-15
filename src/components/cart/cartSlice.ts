import type { CartItem } from "@/types/products";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  cartItems: CartItem[];
};

const savedCart = localStorage.getItem("cart");

const initialState: InitialState = {
  cartItems: savedCart ? JSON.parse(savedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) item.quantity += 1;
      else state.cartItems.push({ ...action.payload, quantity: 1 });
    },

    updateQuantity(state, action) {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item && action.payload.amount > 0)
        item.quantity = action.payload.amount;
    },

    removeCartItem(state, action) {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToCart, updateQuantity, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
