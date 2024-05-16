import * as React from "react";
import styles from "./Chat.module.css";
import ChatEntity from "../ChatEntity/ChatEntity";

const Chat = () => {
  return (
    <div className={styles.chat__wrapper__first}>
      <ChatEntity />
      <div className={styles.chat__empty}></div>
    </div>
  );
};

export default Chat;
