import styles from "./Main.module.css";
import ChatPanel from "../../components/ChatPanel/ChatPanel";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import Chat from "../../components/Chat/Chat";

const Main = () => {
  return (
    <div className={styles.main__wrapper}>
      <div className={styles.main__chatpanel__wrapper}>
        <ChatPanel />
      </div>
      <div className={styles.main__chats__wrapper}>
        <ChatHeader />
        <Chat />
      </div>
    </div>
  );
};

export default Main;
