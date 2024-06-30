import React, { useState } from "react";
import Header from "../header/Header";
import "./FilmsCatalog.css";
import CatalogCart from "../CatalogCart/CatalogCart";
import PostService from "../API/fetch";
import { Film } from "../../types/types";
import { useEffect } from "react";
import FilmsCatalogCart from "../FilmsCatalogCart/FilmsCatalogCart";

const FilmsCatalog = () => {
  const [films, setFilms] = useState<Film[]>([]);

  async function fetchFilm() {
    const users = await PostService.getAll();
    setFilms(users);
  }

  useEffect(() => {
    fetchFilm();
  }, []);

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
