import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/components/cart/cartSlice";

export const store = configureStore({
  reducer: {
    // Wee Add All Reducers Here..
    cart: cartReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart.cartItems));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
