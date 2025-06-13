import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  mood: null,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = "";
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setMood: (state, action) => {
      state.mood = action.payload;
    },
  },
});

export const { login, logout, setUser, setMood } = authSlice.actions;
export default authSlice.reducer;
