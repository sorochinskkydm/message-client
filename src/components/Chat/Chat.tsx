import * as React from "react";
import styles from "./Chat.module.css";
import ChatEntity from "../ChatEntity/ChatEntity";
import sendMessageImg from "../../images/sendMessage.png";
import { instance } from "../../utils/api.config";

interface IMessage {
  firstUserId: string;
  secondUserId: string;
  text: string;
  chatId: string;
}

const Chat = () => {
  const [message, setMessage] = React.useState<IMessage>({
    firstUserId: "",
    secondUserId: "",
    text: "",
    chatId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  // async function sendMessage(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   await Promise.all([
  //     instance
  //       .post("http://localhost:8080/api/messages", {
  //         firstUserId: localStorage.getItem("userId"),
  //         secondUserId: "",
  //         text: "",
  //         chatId: "",
  //       })
  //       .then((response) => {
  //         const { accessToken, userId } = response.data;
  //         localStorage.setItem("token", accessToken);
  //         localStorage.setItem("userId", userId);
  //         navigate("/main");
  //       })
  //       .catch((error): void => {
  //         dispatch(setErrorMessage(error.response.data.message));
  //         dispatch(setCaughtError(true));
  //         setTimeout(() => {
  //           dispatch(setCaughtError(false));
  //         }, 3000);
  //       }),
  //   ]);

  //   dispatch(getUserData());
  // }
  return (
    <div className={styles.chat__wrapper}>
      <div className={styles.messages__wrapper}>
        here will be messages
        <ChatEntity />
      </div>
      <div className={styles.input__wrapper}>
        <input
          type="text"
          name="sendMessage"
          id="sendMessageInput"
          className={styles.sendMessage__input}
          onChange={handleChange}
        />
        <div className={styles.sendMessageBtn}>
          <img
            src={sendMessageImg}
            alt="sendMessageImg"
            className={styles.sendMessageBtn__img}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
