import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./Redux";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;