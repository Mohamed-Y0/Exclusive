import type { ProductTypes } from "@/types/products";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  cartItems: ProductTypes[];
};

const initialState: InitialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {},
});

export default cartSlice.reducer;
