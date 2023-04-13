import { configureStore } from "@reduxjs/toolkit";
import loginFormReducer, { loginApi } from "./apis/authSlice";
import authReducer from "./apis/authSlice";

const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    auth: authReducer,
    loginApi: loginApi.reducer

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
