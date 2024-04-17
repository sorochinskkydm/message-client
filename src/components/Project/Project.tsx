import * as React from "react";
import styles from "./Project.module.css";
import projectImage from "../../images/postman.svg";

const Project = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image__wrapper}>
        <img
          className={styles.project__image}
          src={projectImage}
          alt="projectImage"
        />
      </div>
      <div className={styles.project__name}>Postman</div>
    </div>
  );
};

export default Project;
