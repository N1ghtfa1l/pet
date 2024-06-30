import React, { FC } from "react";
import "./NotificationAdd.css";
import { Film } from "../../types/types";

interface Props {
  props: Film;
}

const NotificationAdd: FC<Props> = ({ props }) => {
  return (
    <div className="notificationBody">
      <span>Вы добавили {props.title} в список избранного</span>
    </div>
  );
};

export default NotificationAdd;
