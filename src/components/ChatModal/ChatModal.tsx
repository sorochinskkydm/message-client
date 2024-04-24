import React from "react";
import styles from "./ChatModal.module.css";

const ChatModal = () => {
  return (
    <div className={styles.chatModal__wrapper}>
      <div className={styles.chatModal__item}>Добавить диалог</div>
      <div className={styles.chatModal__item}>Добавить групповой чат</div>
    </div>
  );
};

export default ChatModal;
