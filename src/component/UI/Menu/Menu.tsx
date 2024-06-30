import React, { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const [vueList, setVueList] = useState<boolean>(false);

  return (
    <div className="menuContainer">
      <div onClick={() => setVueList(!vueList)} className="menuBox">
        <div className="menu"></div>
      </div>
      <div
        className={
          vueList ? "menuList menuListActive" : "menuList menuListHidden"
        }
      >
        <ul>
          <Link to="/">
            <li>Главная</li>
          </Link>
          <Link to="/filmscatalog">
            <li>Каталог фильмов</li>
          </Link>
          <Link to="/favorit">
            <li>Избранное</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
