import React from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addAuth } from "../store/slices/slicesAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const auth = (e: any) => {
    e.preventDefault();
    dispatch(addAuth(true));
    localStorage.setItem("isAuthenticated", "true");
    navigate("/");
  };

  return (
    <div className="LoginContainer">
      <div className="loginTitle">Войдите в аккаунт</div>
      <form className="loginForm">
        <input type="text" placeholder="login" />
        <input type="password" placeholder="password" />
        <button onClick={auth} className="btnLogin">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
