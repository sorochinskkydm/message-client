import * as React from "react";
import styles from "./Tab.module.css";

interface ITab {
  image: string;
  alt: string;
  description: string;
}

const Tab: React.FC<ITab> = ({ image, alt, description }) => {
  return (
    <>
      <div className={styles.tab__container}>
        <div className={styles.image__wrapper}>
          <img className={styles.tab__img} src={image} alt={alt} />
        </div>
        <div className={styles.tab__name}>{description}</div>
      </div>
    </>
  );
};

export default Tab;
