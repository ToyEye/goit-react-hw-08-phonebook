import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      token.set(data.token);
      toast.success(`Welcome ${data.user.name}`);

      return data;
    } catch (error) {
      toast.error('Oops, something went wrong');
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('users/login', credentials);

      toast.success(`Welcome ${data.user.name}`);
      token.set(data.token);

      return data;
    } catch (error) {
      toast.error('Login error');
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('users/logout');
    token.unset(data.token);
    toast.success(`See you again!`);

    return data;
  } catch (error) {
    toast.error('Oops, something went wrong');
    return thunkAPI.rejectWithValue();
  }
});

export const currentUser = createAsyncThunk(
  'auth/getuser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await axios.get('/users/current');
      toast.success(`Hello!`);
      return data;
    } catch (error) {
      toast.error('Oops, something went wrong');
    }
  }
);
