import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
  refreshed: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.isLoggedIn = false;
      state.token = null;
      state.user = { email: null, name: null };
    },
  },
});
export const authReducer = authSlice.reducer;
