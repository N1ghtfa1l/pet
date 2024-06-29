import React, { FC } from "react";
import "./FilmsCart.css";
import { Film } from "../../types/types";
interface Props {
  film: Film;
}

const FilmsCart: FC<Props> = ({ film }) => { 

  return (
    <div className="filmsCart">
      <div className="filmsCartInner">
        <div className="filmsCartImg">Фото</div>
        <div className="filmsCartTitle">{film.title}</div>
        <div className="filmsCartData">{film.date}</div>
      </div>
    </div>
  );
};

export default FilmsCart;
