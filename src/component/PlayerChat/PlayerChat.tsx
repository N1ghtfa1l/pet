import React, { useEffect, useState } from "react";
import "./PlayerChat.css";
import axios from "axios";
import { Link } from "react-router-dom";

const PlayerChat = () => {
  const [messagePost, setMessagePost] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/new-message", {
        message: message,
        id: Date.now(),
      });
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  const subscribe = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/get-message");
      setMessagePost((prevMessages) => [...prevMessages, data]);
      await subscribe();
    } catch (e) {
      setTimeout(() => {
        subscribe();
      }, 500);
    }
  };

  useEffect(() => {
    const fetchInitialMessages = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/get-message");
        setMessagePost(data ? [data] : []);
        await subscribe();
      } catch (err) {
        console.error("Error fetching initial messages:", err);
      }
    };

    fetchInitialMessages();

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
        <form className="playerChatForm" onSubmit={sendMessage}>
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
