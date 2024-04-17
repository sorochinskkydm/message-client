import * as React from "react";
import styles from "./Tab.module.css";
import { useNavigate } from "react-router-dom";

interface ITab {
  image: string;
  alt: string;
  description: string;
}

const Tab: React.FC<ITab> = ({ image, alt, description }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={styles.tab__container}
        onClick={() => navigate("/profile")}
      >
        <div className={styles.image__wrapper}>
          <img className={styles.tab__img} src={image} alt={alt} />
        </div>
        <div className={styles.tab__name}>{description}</div>
      </div>
    </>
  );
};

export default Tab;
