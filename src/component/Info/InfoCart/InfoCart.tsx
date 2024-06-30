import React, { FC, useState } from "react";
import LeftButton from "../../UI/InfoButtons/LeftButton";
import RigtButton from "../../UI/InfoButtons/RightButton";
import { Film } from "../../../types/types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer } from "../../store/slices/slicesPlayer";
import { addFavorit } from "../../store/slices/slicesFavorit";
import NotificationAdd from "../../Notification/NotificationAdd";
import { RootState } from "../../store/store";
import NotificationInclude from "../../Notification/NotificationInclude";

interface props {
  film: Film;
}

const InfoCart: FC<props> = ({ film }) => {
  const dispatch = useDispatch();
  const [showAddNotification, setAddShowNotification] =
    useState<boolean>(false);
  const [showIncludeNotification, setShowIncludeNotification] =
    useState<boolean>(false);

  const favorit = useSelector((state: RootState) => state.favoritFilms.value);

  const handlerAddFavorit = () => {
    dispatch(addFavorit(film));
    const includeFavorit = favorit.some((el: any) => el.id === film.id);
    if (!includeFavorit) {
      setAddShowNotification(true);
      setTimeout(() => setAddShowNotification(false), 3000);
    } else {
      setShowIncludeNotification(true);
      setTimeout(() => setShowIncludeNotification(false), 3000);
    }
  };

  const handlerAddPlayer = () => {
    const newPlayer = {
      id: film.id,
      src: film.src,
    };
    dispatch(addPlayer(newPlayer));
  };

  return (
    <div className="infoInnerCart">
      <div className="cartLeft">
        <div className="cartImg">Фото</div>
      </div>
      <div className="cartRight">
        <div className="cartRightTitle">
          {film.title} ({film.date})
        </div>
        <div className="cartRightSubtitle">{film.subtitle}</div>
        <div className="cartRightButtons">
          <Link to={`/player/${film.id}`}>
            <LeftButton onClick={() => handlerAddPlayer()}>Смотреть</LeftButton>
          </Link>
          <RigtButton onClick={handlerAddFavorit}>В избранное</RigtButton>
        </div>
        <div className="cartRightDesc">О фильме</div>
        <div className="cartRightTable">
          <div className="leftTable">
            <span>Страна</span>
            <span>Жанр</span>
            <span>Возраст</span>
          </div>
          <div className="rigtTable">
            <span>США</span>
            <span>{film.genre}</span>
            <span>16+</span>
          </div>
          {showAddNotification && <NotificationAdd props={film} />}
          {showIncludeNotification && <NotificationInclude props={film} />}
        </div>
      </div>
    </div>
  );
};

export default InfoCart;
