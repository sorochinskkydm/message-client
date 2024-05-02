import * as React from "react";
import styles from "./Chat.module.css";

import mailImage from "../../images/mail.png";

const Chat = () => {
  return (
    <div className={styles.chat__wrapper}>
      <div className={styles.chat__empty}>
        Выберите диалог, или создайте новый в панели:
      </div>
      <div className={styles.chat__empty__image}>
        <img src={mailImage} alt="mail" className={styles.mail__image} />
      </div>
    </div>
  );
};

export default Chat;
