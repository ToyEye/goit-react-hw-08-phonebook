import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseUrl =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method }) => {
    const { data } = await axios({ url: baseUrl + url, method });
    return { data };
  };

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseUrl({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    getRegisterUser: builder.mutation({
      query: () => ({ url: 'users/signup', method: 'POST' }),
      providesTags: ['User'],
    }),
    getUserName: builder.query({
      query: () => ({ url: `users/login`, method: 'POST' }),
    }),
    getLogOutUser: builder.query({
      query: () => ({ url: '/users/logout', method: 'POST' }),
      invalidatesTags: ['User'],
    }),
    getCurrentUser: builder.query({
      query: () => '/users/current',
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUserNameQuery,
  useGetRegisterUserMutation,
  useGetLogOutUserQuery,
  useGetCurrentUserQuery,
} = authApi;
