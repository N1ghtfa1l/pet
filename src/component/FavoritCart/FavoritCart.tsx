import React, { FC } from "react";
import "./FavoritCart.css";
import { Film } from "../../types/types";
import { useDispatch } from "react-redux";
import { removeFavorit } from "../store/slices/slicesFavorit";
import BtnDeleteFavorit from "../UI/BtnDeleteFavorit/BtnDeleteFavorit";
import { Link } from "react-router-dom";

interface Props {
  el: Film;
}

const FavoritCart: FC<Props> = ({ el }) => {
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removeFavorit(id));
  };

  return (
    <div className="favoritInnerContent">
      <Link to={`/info/${el.id}`}>
        <div className="favoritCart">
          <div className="favoritImg">Фото</div>
          <div className="favoritCartInfo">
            <div className="favoritTitle">{el.title}</div>
            <div className="favoritSubtitle">{el.subtitle}</div>
            <div className="favoritDate">{el.date}</div>
          </div>
        </div>
      </Link>
      <BtnDeleteFavorit handleDelete={handleDelete} el={el} />
    </div>
  );
};

export default FavoritCart;
