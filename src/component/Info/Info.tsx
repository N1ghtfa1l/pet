import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store/store";
import Header from "../header/Header";
import "./Info.css";
import InfoCart from "./InfoCart/InfoCart";
import BackButton from "../UI/InfoBackButton/BackButton";
import { Link } from "react-router-dom";

const Info = () => {
  const { id } = useParams<{ id: string }>();
  const films = useSelector((state: RootState) => state.film.value);
  const film = films.find((film) => film.id.toString() === id);
  

  return (
    <div className="info">
      <Header />
      <div className="container">
        <div className="infoInner">
          <Link to="/">
            <BackButton> Назад</BackButton>
          </Link>
          {film ? <InfoCart film={film} /> : <p>Идет загрузка</p>}
        </div>
      </div>
    </div>
  );
};

export default Info;
