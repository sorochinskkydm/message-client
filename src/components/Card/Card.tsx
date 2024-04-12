import * as React from "react";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}></div>
      <span className={styles.title}>Присоединиться к проекту?</span>
    </div>
  );
};

export default Card;
