import React, { FC } from "react";
import CatalogCart from "../CatalogCart/CatalogCart";
import "./FilmsCatalogCart.css";

interface Props {
  films: any;
  selectFilms: any;
}

const FilmsCatalogCart: FC<Props> = ({ films, selectFilms }) => {
  return (
    <div>
      {films.length > 0 ? (
        selectFilms.length > 0 ? (
          selectFilms.map((el: any) => <CatalogCart film={el} key={el.id} />)
        ) : (
          films.map((el: any) => <CatalogCart film={el} key={el.id} />)
        )
      ) : (
        <p className="loadingFilmsCatalog">Идет загрузка...</p>
      )}
    </div>
  );
};

export default FilmsCatalogCart;
