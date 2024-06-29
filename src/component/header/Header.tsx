import React, { FC } from "react";
import "./Header.css";
import Logo from "../UI/Logo/Logo";
import Menu from "../UI/Menu/Menu";
import Input from "../UI/Input/Input";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="headerInner">
          <div className="headerBox">
            <Menu />
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <Input />
          <button>Войти</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
