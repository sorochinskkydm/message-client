import * as React from "react";
import ChatDialog from "../ChatDialog/ChatDialog";
import styles from "./ChatPanel.module.css";

const ChatPanel = (props: any) => {
  return (
    <div className={styles.chatPanel__wrapper}>
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
  );
};

export default ChatPanel;
