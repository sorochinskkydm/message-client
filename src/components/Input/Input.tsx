import * as React from "react";
import styles from "./input.module.css";

interface IInput {
  title: string;
  placeholder: string;
  id: string;
  name: string;
  type: string;
  value: any;
  onChange: any;
}

const Input: React.FC<IInput> = ({
  title,
  placeholder,
  id,
  name,
  type,
  value,
  onChange,
}) => {
  return (
    <div className={styles.auth__input__wrapper}>
      <label htmlFor={name} className={styles.auth__label}>
        {title}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={styles.auth__input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
