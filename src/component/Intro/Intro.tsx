import React from "react";
import video from "./video/video.mp4";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <video className="video" src={video} autoPlay muted loop></video>
      <div className="container">
        <div className="introInner">
          <div className="introContent">
            <span>
              KINOFILM - крупнейший сервис о кино в рунете. На нем вы сможете
              посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги
              популярных видео и интересные факты
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
