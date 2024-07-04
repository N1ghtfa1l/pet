import React from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addAuth } from "../store/slices/slicesAuth";

const Login = () => {
  const dispatch = useDispatch()

  const auth = (e: any) => {
    e.preventDefault();
    dispatch(addAuth(true))
    localStorage.setItem("isAuthenticated", "true");
  };

  return (
    <div className="LoginContainer">
      <div className="loginTitle">Войдите в аккаунт</div>
      <form className="loginForm" onSubmit={auth}>
        <input type="text" placeholder="login" />
        <input type="password" placeholder="password" />
        <button className="btnLogin">Войти</button>
      </form>
    </div>
  );
};

export default Login;
