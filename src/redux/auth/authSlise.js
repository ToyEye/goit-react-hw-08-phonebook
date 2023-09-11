import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, signUp, currentUser } from './auth-operations';

const initialState = {
  user: { email: '', name: '' },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user.name = '';
      state.user.email = '';
      state.token = null;
      state.isLoggedIn = false;
    },
    [currentUser.fulfilled](state, { payload }) {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
