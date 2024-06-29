import React, { FC } from "react";
import { Film } from "../../types/types";
import "./CatalogCart.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFilm } from "../store/slices/slicesFilm";
import { RootState } from "../store/store";

interface Props {
  film: Film;
}

const CatalogCart: FC<Props> = ({ film }) => {
  const dispatch = useDispatch();
  const films = useSelector((state: RootState) => state.film.value);

  const handleAddFilm = (film: Film) => {
    const filmContains = films.some((f) => f.id === film.id);
    if (!filmContains) {
      dispatch(addFilm(film));
    }
  };

  return (
    <div>
      <Link to={`/info/${film.id}`} onClick={() => handleAddFilm(film)}>
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
