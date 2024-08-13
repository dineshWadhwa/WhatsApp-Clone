import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action?.payload ?? null;
    },
    reset: () => initialState,
  },
});

export const { setUser, reset } = authSlice.actions;

export default authSlice.reducer;
