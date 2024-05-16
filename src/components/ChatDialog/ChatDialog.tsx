import * as React from "react";
import styles from "./ChatDialog.module.css";
import userImage from "../../images/user.png";
import { instance } from "../../utils/api.config";
import { getHours, getMinutes } from "date-fns";
import { useAppSelector } from "../../hooks/hooks";

interface IChatDialog {
  chatId: string;
  name: string;
  surname: string;
  imagePath: string;
  sendTime: Date;
}

interface IMessage {
  firstUserId: string;
  secondUserId: string;
  text: string;
  chatId: string;
  sendTime: string;
}

interface IMessages extends Array<IMessage> {}

const ChatDialog: React.FC<IChatDialog> = ({
  chatId,
  name,
  surname,
  imagePath,
}) => {
  const [lastInDialog, setLastInDialog] = React.useState<IMessage>();
  const [slicedLastMessage, setSlicedLastMessage] = React.useState("");
  const [messages, setMessages] = React.useState<IMessages>([]);
  const [time, setTime] = React.useState("");
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  React.useEffect(() => {
    instance
      .get(`http://localhost:8080/api/messages/${chatId}`)
      .then((response) => {
        setMessages(response.data);
        setIsDataLoaded(true);
      });
  }, [chatId]);

  React.useEffect(() => {
    const getLastMessageOfDialog = () => {
      setLastInDialog(messages[messages.length - 1]);

      if (lastInDialog !== undefined && lastInDialog.text.length > 15) {
        const formattedMessage = `${lastInDialog.text.slice(0, 30)}...`;
        setSlicedLastMessage(formattedMessage);
      }
    };
    const convetDate = () => {
      if (isDataLoaded && lastInDialog?.sendTime !== undefined) {
        setTime(
          `${getHours(lastInDialog?.sendTime)}: ${getMinutes(lastInDialog?.sendTime)}`
        );
      }
    };
    convetDate();
    getLastMessageOfDialog();
  }, [lastInDialog, messages, isDataLoaded]);

  const getChatData = () => {
    
  };

  return (
    <div className={styles.chatDialog__wrapper} onClick={() => getChatData()}>
      <div className={styles.image__wrapper}>
        <img
          src={userImage}
          alt="imageuser"
          className={styles.chatDialog__img}
        />
      </div>
      <div className={styles.text__wrapper}>
        <div className={styles.username}>
          {surname} {name}
        </div>
        <div className={styles.chatDialog__lastMessage}>
          {slicedLastMessage}
        </div>
      </div>
      <div className={styles.chatDialog__sendTime}>{time}</div>
    </div>
  );
};

export default ChatDialog;
