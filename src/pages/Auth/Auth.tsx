import * as React from "react";
import styles from "./auth.module.css";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setCaughtError, setErrorMessage } from "../../redux/slices/errorSlice";
import { getUserData } from "../../redux/slices/userSlice";

import Errors from "../../components/Errors/Errors";
import { instance } from "../../utils/api.config";
import { Link } from "react-router-dom";

interface IAuth {
  username: string;
  password: string;
}

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const caughtError = useAppSelector((state) => state.errorReducer.caughtError);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await Promise.all([
      instance
        .post("http://localhost:8080/api/auth/login", {
          username: auth.username,
          password: auth.password,
        })
        .then((response) => {
          const { accessToken, userId } = response.data;
          localStorage.setItem("token", accessToken);
          localStorage.setItem("userId", userId);
          navigate("/main");
        })
        .catch((error): void => {
          dispatch(setErrorMessage(error.response.data.message));
          dispatch(setCaughtError(true));
          setTimeout(() => {
            dispatch(setCaughtError(false));
          }, 3000);
        }),
    ]);

    dispatch(getUserData());
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
            <div className={styles.link__wrapper}>
              <Link className={styles.linkToRegister} to="/register">
                Нет аккаунта? <br></br> Зарегистрироваться
              </Link>
            </div>
          </div>
          {caughtError && <Errors />}
        </div>
      </form>
    </div>
  );
};

export default Auth;
