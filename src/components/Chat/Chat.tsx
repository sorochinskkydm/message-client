import * as React from "react";
import styles from "./Chat.module.css";

const Chat = () => {
  return (
    <div className={styles.chat__wrapper}>
      <div className={styles.chat__empty}></div>
    </div>
  );
};

export default Chat;
