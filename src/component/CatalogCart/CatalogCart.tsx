import React, { FC } from "react";
import { Film } from "../../types/types";
import "./CatalogCart.css";
import { Link } from "react-router-dom";

interface Props {
  film: Film;
}

const CatalogCart: FC<Props> = ({ film }) => {
  return (
    <div>
      <Link to={`/info/${film.id}`}>
        <div className="catalogCart">
          <div className="catalogCartImg">Фото</div>
          <div className="catalogCartDesc">
            <div className="catalogCartTitle">{film.title}</div>
            <div className="catalogCartDate">{film.date}, 102 мин</div>
            <div className="catalogCartGenre">{film.genre}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CatalogCart;
