import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/components/cart/cartSlice";
import loginReducer from "@/components/signIn/loginSlice";
import settingsReducer from "@/components/profile/settingsSlice";

export const store = configureStore({
  reducer: {
    // Wee Add All Reducers Here..
    cart: cartReducer,
    login: loginReducer,
    settings: settingsReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart.cartItems));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
