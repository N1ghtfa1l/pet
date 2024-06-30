import React from "react";
import Header from "../../header/Header";
import "./Favorit.css";
import FavoritCart from "../../FavoritCart/FavoritCart";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


const Favorit = () => {
const favorit = useSelector((state:RootState)=> state.favoritFilms.value)
console.log(favorit)


  return (
    <div>
      <Header />
      <div className="faovritContainer">
        <div className="favoritInner">
          <div className="favoritInnerTitle">Ваши избранные фильмы</div>
          {favorit.map((el:any)=> 
          <FavoritCart el={el} />
        )}
        </div>
      </div>
    </div>
  );
};

export default Favorit;
