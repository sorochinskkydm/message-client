import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setCaughtError, setErrorMessage } from "../../redux/slices/errorSlice";
import Errors from "../../components/Errors/Errors";
import { useNavigate } from "react-router-dom";
import { instance } from "../../utils/api.config";
import styles from "./Profile.module.css";
//images
import userImage from "../../images/user.png";
import shareImage from "../../images/share.png";

interface IProfile {
  name: string;
  surname: string;
  username: string;
  date: Date | null;
  position: string;
  photo: string;
}

export interface IModal {
  setIsOpen: any;
}

const Profile: React.FC<IModal> = ({ setIsOpen }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const caughtError = useAppSelector((state) => state.errorReducer.caughtError);
  const [data, setData] = React.useState<IProfile>({
    name: "",
    surname: "",
    username: "",
    date: null,
    position: "",
    photo: "",
  });

  React.useEffect(() => {
    instance
      .get(
        "http://localhost:8080/api/users/profile/8e002567b4ae47ea89f5e1ddc7184daf"
      )
      .then((response) => {
        const { name, surname, username, date, position, photo } =
          response.data;
        setData({
          name,
          surname,
          username,
          date,
          position,
          photo,
        });
      })
      .catch((error): void => {
        dispatch(setErrorMessage(error.response.data.message));
        dispatch(setCaughtError(true));
        setTimeout(() => {
          dispatch(setCaughtError(false));
          navigate("/main");
        }, 3000);
      });
  }, [dispatch, navigate]);
  return (
    <div className={styles.background} onClick={() => setIsOpen(false)}>
      <div className={styles.profile__wrapper}>
        <div className={styles.profile__image__wrapper}>
          <img
            className={styles.profile__image}
            src={userImage || data.photo}
            alt="userPhoto"
          />
          {/* <img
        className={styles.profile__image}
        src={data.photo || userPhoto}
        alt="userPhoto"
      /> */}
        </div>
        <div className={styles.profile__top}>
          <div className={styles.share__wrapper}>
            <img
              className={styles.share__image}
              src={shareImage}
              alt="shareImage"
            />
          </div>
          <div className={styles.close__btn} onClick={() => setIsOpen(false)}>
            X
          </div>
        </div>
        <div className={styles.profile__bottom}>
          <div className={styles.info__wrapper}>
            <div className={styles.name__wrapper}>
              {data.name} {data.surname}
            </div>
            <div className={styles.username__wrapper}>@{data.username}</div>
            <div className={styles.date__wrapper}>
              {data.date?.toString() || "Дата скрыта"}
            </div>
          </div>
        </div>

        {caughtError && <Errors />}
      </div>
    </div>
  );
};

export default Profile;
