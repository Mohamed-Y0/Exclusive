import type { User } from "@/types/users";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  user: User | null;
  isAuthenticatied: boolean;
};

const initialState: InitialState = {
  user: null,
  isAuthenticatied: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    loggedUser(state, action) {
      state.user = action.payload;
      state.isAuthenticatied = true;
      console.log(state.user);
    },

    logoutUser(state) {
      state.user = null;
      state.isAuthenticatied = false;
    },
  },
});

export const { loggedUser, logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
