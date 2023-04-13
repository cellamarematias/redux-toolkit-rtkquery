import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginFormState {
  username: string;
  password: string;
  loading: boolean;
  error: string | null;
  success: boolean,

}

const initialState: LoginFormState = {
  username: "",
  password: "",
  loading: false,
  error: null,
  success: false,
};

const loginFormSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload;
    },
    resetForm: (state) => {
      state.username = "";
      state.password = "";
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
});

const API = 'https://node-api-mysql-cellamarematias.vercel.app/api/users/auth';


export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (body) => ({
        url: API,
        method: 'POST',
        body,
        headers : {
          'Content-Type' : 'application/json'
        },
        providesTags: ['Users'],
      }),
    })
  })
});

export const { useLazyGetUserQuery } = loginApi;

export const { setUsername, setPassword, setLoading, setError, resetForm } = loginFormSlice.actions;

export default loginFormSlice.reducer;
