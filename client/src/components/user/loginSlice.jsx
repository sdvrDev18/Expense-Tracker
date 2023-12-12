import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: {}
  },
  reducers: {
    userdata: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { userdata } = loginSlice.actions;

export default loginSlice.reducer;
