import axios from "axios";
import { Dispatch, SetStateAction } from "react";

const subscribe = async (
  setMessagePost: Dispatch<SetStateAction<any[]>>
) => {
  try {
    const { data } = await axios.get("http://localhost:5000/get-message");
    setMessagePost((prevMessages) => [...prevMessages, data]);
    await subscribe(setMessagePost);
  } catch (e) {
    setTimeout(() => {
      subscribe(setMessagePost);
    }, 500);
  }
};

const fetchInitialMessages = async (
  setMessagePost: Dispatch<SetStateAction<any[]>>,
  subscribe: (setMessagePost: Dispatch<SetStateAction<any[]>>) => Promise<void>
) => {
  try {
    const { data } = await axios.get("http://localhost:5000/get-message");
    setMessagePost(data ? [data] : []);
    await subscribe(setMessagePost);
  } catch (err) {
    console.error("Error fetching initial messages:", err);
  }
};

export { subscribe, fetchInitialMessages };
