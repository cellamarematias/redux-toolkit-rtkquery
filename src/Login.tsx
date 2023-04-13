import React, { useState } from "react";
import LoginForm from "./components/formulario";
import { setUsername, setPassword, setLoading, setError, resetForm, useLazyGetUserQuery } from "./store/apis/authSlice";
import { RootState } from "./store/store";
import { useDispatch, useSelector } from "react-redux";

const LoginPage: React.FC = () => {
  const [username, setUsernameState] = useState("");
  const [password, setPasswordState] = useState("");
  const dispatch = useDispatch();
  const user = {};

  const [trigger, { isSuccess, isError, isFetching }] = useLazyGetUserQuery(user);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const user = {
        usuario: username,
        password: password,
      };
      trigger(user);
    } catch (error: unknown) {
      if (typeof error === "string") {
        error.toUpperCase();
      } else if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    } finally {
      dispatch(setLoading(false));
      dispatch(resetForm());
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(e.target.value));
    setUsernameState(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
    setPasswordState(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Login</button>
      </form>
      {isSuccess && <h3>Success!</h3>}
    </div>
  );
};

export default LoginPage;
