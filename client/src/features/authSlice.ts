import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DecodedToken, Teacher } from "../types/index.ts";

export type Mood = "DEMO" | "ONLINE" | "OFFLINE" | null;

interface AuthState {
  token: string | null;
  decodedToken: DecodedToken | null;
  user: Teacher | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  decodedToken: null,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
    handleSetDecodedToken: (state, action: PayloadAction<DecodedToken>) => {
      state.decodedToken = action.payload;
    },

    handleSetUser: (state, action: PayloadAction<Teacher | null>) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, handleSetDecodedToken, handleSetUser } =
  authSlice.actions;
export default authSlice.reducer;
