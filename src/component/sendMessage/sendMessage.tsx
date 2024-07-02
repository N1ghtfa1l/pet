import React from "react";

import axios from "axios";
const sendMessage = async (
  e: React.FormEvent,
  message: string,
  setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
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

export default sendMessage;
