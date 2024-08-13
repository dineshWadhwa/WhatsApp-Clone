import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  person: null,
  newMessageFlag: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setPerson: (state, action) => {
      state.person = action?.payload ?? null;
    },
    setNewMessageFlag: (state, action) => {
      state.newMessageFlag = action?.payload ?? null;
    },
    resetAccSlice: () => initialState,
  },
});

export const { setPerson, setNewMessageFlag, resetAccSlice } = accountSlice.actions;

export default accountSlice.reducer;
