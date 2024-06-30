import React, { FC } from "react";
import "./FavoritCart.css";
import { Film } from "../../types/types";


interface Props {
  el:Film,
}

const FavoritCart:FC<Props> = ({el}) => {
  return (
    <div className="favoritInnerContent">
      <div className="favoritCart">
        <div className="favoritImg">Фото</div>
        <div className="favoritCartInfo">
          <div className="favoritTitle">{el.title}</div>
          <div className="favoritSubtitle">{el.subtitle}</div>
          <div className="favoritDate">{el.date}</div>
        </div>
      </div>
      <button className="buttonFavoritDelete">Удалить</button>
    </div>
  );
};

export default FavoritCart;
