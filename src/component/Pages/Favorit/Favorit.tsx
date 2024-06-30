import React, { useState } from "react";
import Header from "../../header/Header";
import "./Favorit.css";
import FavoritCart from "../../FavoritCart/FavoritCart";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Film } from "../../../types/types";

const Favorit = () => {
  const favorit = useSelector((state: RootState) => state.favoritFilms.value);

  

  return (
    <div>
      <Header />
      <div className="faovritContainer">
        <div className="favoritInner">
          <div className="favoritInnerTitle">Ваши избранные фильмы</div>
          {favorit.map((el:Film)=> 
          <FavoritCart key={el.id} el={el} />
          
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorit;
