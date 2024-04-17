import * as React from "react";
import styles from "./Errors.module.css";
import alertImage from "../../images/danger.png";
import { useAppSelector } from "../../hooks/hooks";

const Errors = () => {
  const message = useAppSelector((state) => state.errorReducer.message);
  return (
    <div className={styles.error__wrapper}>
      <div className={styles.image__wrapper}>
        <img className={styles.alert__image} src={alertImage} alt="alert img" />
      </div>
      <div className={styles.error__text}>{message}</div>
    </div>
  );
};

export default Errors;
