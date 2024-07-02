import React, { useState } from "react";
import Header from "../header/Header";
import "./FilmsCatalog.css";
import FilmsCatalogCart from "../FilmsCatalogCart/FilmsCatalogCart";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const FilmsCatalog = () => {
  const films = useSelector((state: RootState) => state.film.value);

  const select = ["Драма", "Боевик", "Фантастика", "Все"];

  const [selectedGenre, setSelectedGenre] = useState("");

  const selectFilms = films.filter((el) => el.genre === selectedGenre);

  return (
    <div>
      <Header />
      <div className="bigContainer">
        <div className="catalogInner">
          <div className="catalogTitle">Все фильмы</div>
          <div className="catalogSubtitle">Фильмы всего мира</div>
          <div className="catalogContent">
            <div className="catalogLeft">
              {select.map((el) => (
                <div key={el} onClick={() => setSelectedGenre(el)}>
                  <div className="catalogSelect" key={el}>
                    {el}
                  </div>
                </div>
              ))}
            </div>
            <div className="catalogRight">
              <FilmsCatalogCart films={films} selectFilms={selectFilms} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmsCatalog;
