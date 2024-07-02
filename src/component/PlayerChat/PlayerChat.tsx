import React, { useEffect, useState } from "react";
import "./PlayerChat.css";
import axios from "axios";
import { Link } from "react-router-dom";
import sendMessage from "../sendMessage/sendMessage";
import { fetchInitialMessages, subscribe } from "../../ServerSubsribe/ServerSubscribe";

const PlayerChat = () => {
  const [messagePost, setMessagePost] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchInitialMessages(setMessagePost, subscribe);

    return () => {
      setMessagePost([]);
    };
  }, []);

  return (
    <div className="playerChat">
      <div className="playerTop">
        <Link to="/">
          <button>Назад</button>
        </Link>
      </div>

      <div className="playerChatInner">
        <div className="playerChatMessage">
          {messagePost.map((mess: any) => (
            <div className="playerMessages" key={mess.id}>
              {mess.message}
            </div>
          ))}
        </div>
        <form
          className="playerChatForm"
          onSubmit={(e) => sendMessage(e, message, setMessage)}
        >
          <input
            placeholder="Введите сообщение"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
          />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default PlayerChat;
