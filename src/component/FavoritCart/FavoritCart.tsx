import React, { FC } from "react";
import "./FavoritCart.css";
import { Film } from "../../types/types";
import { useDispatch } from "react-redux";
import { removeFavorit } from "../store/slices/slicesFavorit";



interface Props {
  el:Film,
}

const FavoritCart:FC<Props> = ({el}) => {
  const dispatch = useDispatch()

const handleDelete = (id:number) => {
  dispatch(removeFavorit(id))
}

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
      <button onClick={()=> handleDelete(el.id)} className="buttonFavoritDelete">Удалить</button>
    </div>
  );
};

export default FavoritCart;
