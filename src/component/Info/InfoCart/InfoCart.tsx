import React, { FC } from "react";
import LeftButton from "../../UI/InfoButtons/LeftButton";
import RigtButton from "../../UI/InfoButtons/RightButton";
import { Film } from "../../../types/types";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { addPlayer } from "../../store/slices/slicesPlayer";

interface props {
  film: Film;
}

const InfoCart: FC<props> = ({ film }) => {
  const dispatch = useDispatch();

  const handlerAddPlayer = () => {
    const newPlayer = {
      id: film.id,
      src: film.src,
    }
    dispatch(addPlayer(newPlayer))
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
            <LeftButton onClick={() => handlerAddPlayer()}>
              Смотреть
            </LeftButton>
          </Link>
          <RigtButton additionalClass="rightButtonActive">
            В избранное
          </RigtButton>
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
        </div>
      </div>
    </div>
  );
};

export default InfoCart;
