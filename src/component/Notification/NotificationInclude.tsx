import React, { FC } from "react";
import "./NotificationInclude.css";
import { Film } from "../../types/types";

interface Props {
  props: Film;
}

const NotificationInclude: FC<Props> = ({ props }) => {
  return (
    <div className="notificationIncludeBody">
      <span>Вы уже добавили {props.title} в список избранного!</span>
    </div>
  );
};

export default NotificationInclude;
