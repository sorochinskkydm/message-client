import * as React from "react";
import userImage from "../../images/user.png";
import phoneImage from "../../images/phone.png";
import moreImage from "../../images/more.png";
import styles from "./ChatHeader.module.css";
import { useAppSelector } from "../../hooks/hooks";

const ChatHeader = () => {
  const userInfo = useAppSelector((state) => state.userReducer.userInfo);
  return (
    <div className={styles.chatHeader__wrapper}>
      <div className={styles.image__wrapper}>
        <img
          src={userImage}
          alt="imageuser"
          className={styles.chatHeader__img}
        />
      </div>
      <div className={styles.text__wrapper}>
        <div className={styles.username}>Сорочинский Дмитрий</div>
      </div>
      <div className={styles.icons__wrapper}>
        <div className={styles.phone__wrapper}>
          <img
            className={styles.chatHeader__phone__img}
            src={phoneImage}
            alt="phoneImage"
          />
        </div>
        <div className={styles.more__wrapper}>
          <img
            className={styles.chatHeader__more__img}
            src={moreImage}
            alt="moreImage"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
