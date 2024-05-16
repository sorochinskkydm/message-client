import React from "react";
import styles from "./ChatEntity.module.css";

const ChatEntity = () => {
  return (
    <div className={styles.chatEntity__wrapper__first}>
      <div className={styles.chatEntity__body__first}>
        Свойство word-wrap указывает, переносить или нет длинные слова, которые
        не помещаются по ширине в заданную область. Данное свойство носит
        черновой характер и при валидации документа на CSS3 выдает ошибку.
      </div>
      <div className={styles.chatEntity__time}>23:00</div>
    </div>
  );
};

export default ChatEntity;
