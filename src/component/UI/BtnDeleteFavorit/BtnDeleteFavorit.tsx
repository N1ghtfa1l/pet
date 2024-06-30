import React, { FC } from "react";
import { Film } from "../../../types/types";
import style from './BtnDeleteFavorit.module.css'


interface Props {
    handleDelete: Function,
    el: Film,
}

const BtnDeleteFavorit:FC<Props> = ({handleDelete, el}) => {
  return (
    <button onClick={() => handleDelete(el.id)} className={style.buttonFavoritDelete}>
      Удалить
    </button>
  );
};

export default BtnDeleteFavorit;
