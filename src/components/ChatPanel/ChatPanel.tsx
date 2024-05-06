import * as React from "react";
import ChatDialog from "../ChatDialog/ChatDialog";
import styles from "./ChatPanel.module.css";
import Project from "../Project/Project";

import addImage from "../../images/add.png";
import userImage from "../../images/user.png";
import Tab from "../Tab/Tab";
import Profile from "../../pages/Profile/Profile";
import ChatModal from "../ChatModal/ChatModal";
import { instance } from "../../utils/api.config";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setCaughtError, setErrorMessage } from "../../redux/slices/errorSlice";

interface IChats {
  firstUserId: string;
  secondUserId: string;
  projectId: string;
}

const ChatPanel = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const caughtError = useAppSelector((state) => state.errorReducer.caughtError);
  const [chats, setChats] = React.useState<IChats>({
    firstUserId: "",
    secondUserId: "",
    projectId: "",
  });

  React.useEffect(() => {
    const userId = localStorage.getItem("userId");
    instance
      .get(`http://localhost:8080/api/chats/${userId}`)
      .then((response) => {
        console.log(response.data);
        setChats({
          firstUserId: response.data.firstUserId,
          secondUserId: response.data.secondUserId,
          projectId: response.data.projectId,
        });
      })
      .catch((error): void => {
        dispatch(setErrorMessage(error.response.data.message));
        dispatch(setCaughtError(true));
        setTimeout(() => {
          dispatch(setCaughtError(false));
        }, 3000);
      });
  }, [dispatch]);

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
        <div className={styles.tabs__wrapper} onClick={() => setIsOpen(true)}>
          <Tab
            image={userImage}
            alt="user profile image"
            description="profile"
          />
        </div>
        <div className={styles.title__wrapper}>
          <div className={styles.title}>Чаты</div>
          <div className={styles.create}>
            <button
              className={styles.create__btn}
              type="button"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
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
        <ChatDialog lastMessage="awddwaawdwdwawwadwadaw" />
        <ChatDialog lastMessage="awddwaawdwdwawwadwadaw" />
        <ChatDialog lastMessage="awddwaawdwdwawwadwadaw" />
        <ChatDialog lastMessage="awddwaawdwdwawwadwadaw" />
      </div>
      {isOpen && <Profile setIsOpen={setIsOpen} />}
      {isModalOpen && <ChatModal />}
    </div>
  );
};

export default ChatPanel;
