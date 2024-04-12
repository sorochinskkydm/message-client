import * as React from "react";
import styles from "./ChatDialog.module.css";

interface IChatDialog {
  name: string;
  surname: string;
  lastMessage: string;
  imagePath: string;
  sendTime: Date;
}

const ChatDialog: React.FC = (
  {
    // name,
    // surname,
    // lastMessage,
    // imagePath,
    // sendTime,
  }
) => {
  return (
    <div className={styles.chatDialog__wrapper}>
      <div className="image__wrapper">
        <img src="./user.svg" alt="imageuser" className="chatDialog__img" />
      </div>
    </div>
  );
};

export default ChatDialog;
