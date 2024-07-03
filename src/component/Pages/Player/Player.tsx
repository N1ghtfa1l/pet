import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import "./Player.css";
import PlayerChat from "../../PlayerChat/PlayerChat";
const Player = () => {
  const player = useSelector((state: RootState) => state.player.value);
  const { id } = useParams<{ id: string }>();
  const numberId = Number(id);
  const currentPlayer = player.find((p: any) => p.id === numberId);

  return (
    <div className="player">
      <iframe
        className="playerVideo"
        src={currentPlayer.src}
        title={currentPlayer.id}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <PlayerChat />
    </div>
  );
};

export default Player;
