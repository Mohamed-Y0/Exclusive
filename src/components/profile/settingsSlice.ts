import type { User } from "@/types/users";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  userData: User | null;
};

const initialState: InitialState = {
  userData: null,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {},
});

export default settingsSlice.reducer;
