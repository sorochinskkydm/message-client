import * as React from "react";
import ChatDialog from "../ChatDialog/ChatDialog";
import styles from "./ChatPanel.module.css";
import Project from "../Project/Project";

import addImage from "../../images/add.png";

const ChatPanel = (props: any) => {
  return (
    <div className={styles.chatPanel__wrapper}>
      <div className={styles.project__panel__wrapper}>
        <Project />
        <Project />
        <div className={styles.add__project__btn}>
          <div className={styles.image__wrapper}>
            <img
              className={styles.add__project__btn__img}
              src={addImage}
              alt="projectImage"
            />
          </div>
          <div className={styles.add__project__button__name}>Добавить</div>
        </div>
      </div>
      <div className={styles.chats__wrapper}>
        <div className={styles.title__wrapper}>
          <div className={styles.title}>Чаты</div>
          <div className={styles.create}>
            <button className={styles.create__btn} type="button">
              +
            </button>
          </div>
        </div>
        <div className={styles.search__input}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Поиск диалогов"
          />
        </div>
        <ChatDialog />
        <ChatDialog />
        <ChatDialog />
        <ChatDialog />
      </div>
    </div>
  );
};

export default ChatPanel;
