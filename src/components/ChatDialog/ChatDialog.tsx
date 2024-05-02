import * as React from "react";
import styles from "./ChatDialog.module.css";
import userImage from "../../images/user.png";

interface IChatDialog {
  // name: string;
  // surname: string;
  lastMessage: string;
  // imagePath: string;
  // sendTime: Date;
}

const ChatDialog: React.FC<IChatDialog> = ({
  // name,
  // surname,
  lastMessage,
  // imagePath,
  // sendTime,
}) => {
  const [slicedLastMessage, setSlicedLastMessage] = React.useState("");
  React.useEffect(() => {
    if (lastMessage.length > 15) {
      setSlicedLastMessage(`${lastMessage.slice(0, 15)}...`);
    }
  }, [slicedLastMessage, lastMessage]);
  return (
    <div className={styles.chatDialog__wrapper}>
      <div className={styles.image__wrapper}>
        <img
          src={userImage}
          alt="imageuser"
          className={styles.chatDialog__img}
        />
      </div>
      <div className={styles.text__wrapper}>
        <div className={styles.username}>Сорочинский Дмитрий</div>
        <div className={styles.chatDialog__lastMessage}>
          {slicedLastMessage}
        </div>
      </div>
      <div className={styles.chatDialog__sendTime}>20:15</div>
    </div>
  );
};

export default ChatDialog;
