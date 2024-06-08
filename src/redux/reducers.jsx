/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { UserDetails } from "./initialState";

const userDetailsSlice = createSlice({
  name: UserDetails,
  initialState: UserDetails,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setRandomId: (state, action) => {
      state.randomId = action.payload;
    },
  },
});
export const { setUserName, setRandomId } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
