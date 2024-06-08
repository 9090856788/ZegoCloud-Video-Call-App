import { configureStore } from "@reduxjs/toolkit";

// initialState
import { UserDetails } from "./initialState";

// reducers
import userDetailsReducer from "../redux/reducers";

export const RootState = {
  userDetailsState: UserDetails,
};
export const store = configureStore({
  reducer: {
    userDetailsState: userDetailsReducer,
  },
});
