import type { User } from "@/types/users";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  user: User[];
  isAuthenticatied: boolean;
};

const initialState: InitialState = {
  user: [],
  isAuthenticatied: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    loggedUser(state, action) {
      state.user = action.payload.data;
      state.isAuthenticatied = true;
    },
  },
});

export const { loggedUser } = loginSlice.actions;
export default loginSlice.reducer;
