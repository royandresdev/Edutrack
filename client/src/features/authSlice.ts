/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Mood = "DEMO" | "ONLINE" | "OFFLINE" | null;

interface AuthState {
  token: string | null;
  user: any; // Replace 'any' with a more specific type if available
  mood: Mood;
}

const initialState: AuthState = {
  token: null,
  user: null,
  mood: null,
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
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },

    setMood: (state, action: PayloadAction<Mood>) => {
      state.mood = action.payload;
    },
  },
});

export const { login, logout, setUser, setMood } = authSlice.actions;
export default authSlice.reducer;
