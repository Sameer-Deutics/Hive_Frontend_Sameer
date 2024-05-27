import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
    fetchProfile:(state,action)=>{
      state.profile = action.payload
    }
  },
});

export const { loginUser, logoutUser, fetchProfile } = userSlice.actions;

export default userSlice.reducer;