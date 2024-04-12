import * as React from "react";
import styles from "./Main.module.css";
import ChatPanel from "../../components/ChatPanel/ChatPanel";
import ChatHeader from "../../components/ChatHeader/ChatHeader";

const Main = () => {
  return (
    <div className={styles.main__wrapper}>
      <ChatPanel />
      <ChatHeader />
    </div>
  );
};

export default Main;
