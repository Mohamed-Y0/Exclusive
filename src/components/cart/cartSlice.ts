import type { ProductTypes } from "@/types/products";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  cart: ProductTypes[];
};

const initialState: InitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {},
});

export default cartSlice.reducer;
