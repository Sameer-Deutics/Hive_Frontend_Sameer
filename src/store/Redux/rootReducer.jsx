import { combineReducers } from "@reduxjs/toolkit";
// Import other reducers as needed
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  // Add your other reducers here
  user: userReducer,
});

export default rootReducer;
