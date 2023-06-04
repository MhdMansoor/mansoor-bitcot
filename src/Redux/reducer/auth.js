import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userDetails: [],
    authToken: "",
  },
  reducers: {
    addUser: (state, action) => {
      const user = action.payload;
      state.userDetails.push({
        email: user.email,
        password: user.password,
      });
    },
    addToken: (state, action) => {
      const userToken = action.payload;
      state.authToken = userToken;
    },
    clearAuth: (state) => {
      state.authToken = "";
    },
  },
});

export const { addUser, addToken, clearAuth } = authSlice.actions;
export default authSlice.reducer;
