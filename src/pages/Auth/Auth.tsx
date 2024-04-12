import * as React from "react";
import styles from "./auth.module.css";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";

interface IAuth {
  username: string;
  password: string;
}

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = React.useState<IAuth>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuth({
      ...auth,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(auth),
    })
      .then((response) => {
        if (response.status === 400) {
          alert("Проверьте правильность ввода данных");
          return;
        }
        navigate("/main");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} method="post" className={styles.auth__form}>
        <div className={styles.auth__wrapper}>
          <div className={styles.form__wrapper}>
            <div className={styles.title}>
              messenger<span>_</span>
            </div>

            <Input
              value={auth.username || ""}
              type="text"
              title="Логин"
              placeholder="Имя пользователя"
              id="username"
              name="username"
              onChange={handleChange}
            />
            <Input
              value={auth.password || ""}
              type="text"
              title="Пароль"
              placeholder="Пароль"
              id="password"
              name="password"
              onChange={handleChange}
            />
            <button type="submit" className={styles.auth__button}>
              Войти
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
