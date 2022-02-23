import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, signUp, currentUser } from './auth-operations';

const initialState = {
  user: { email: '', userName: '' },
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
      state.user.Name = payload.name;
      state.user.email = payload.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user.Name = '';
      state.user.email = '';
      state.token = '';
      state.isLoggedIn = false;
    },
    [currentUser.fulfilled](state, { payload }) {
      state.user.userName = payload.name;
      state.user.email = payload.email;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
