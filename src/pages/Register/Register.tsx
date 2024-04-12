import * as React from "react";
import styles from "./Register.module.css";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";

interface IData {
  name: string;
  surname: string;
  position: string;
  isAdmin: boolean;
  birthDate: string;
  username: string;
  email: string;
  password: string;
  publicKey: string;
  privateKey: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState<IData>({
    name: "",
    surname: "",
    position: "",
    isAdmin: false,
    birthDate: "",
    username: "",
    email: "",
    password: "",
    publicKey: "1",
    privateKey: "sfs",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 400) {
          alert("Такой логин уже занят");
          return;
        }
        navigate("/auth");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.auth__form}>
        <div className={styles.auth__wrapper}>
          <div className={styles.title}>
            messenger<span>_</span>
          </div>

          <Input
            type="text"
            title="Фамилия"
            placeholder="Фамилия"
            id="surname"
            name="surname"
            value={data.surname || ""}
            onChange={handleChange}
          />
          <Input
            type="text"
            title="Имя"
            placeholder="Имя"
            id="name"
            name="name"
            value={data.name || ""}
            onChange={handleChange}
          />
          <Input
            type="text"
            title="Должность"
            placeholder="Junior backend developer"
            id="position"
            name="position"
            value={data.position || ""}
            onChange={handleChange}
          />
          <Input
            type="email"
            title="Почта"
            placeholder="Электронная почта"
            id="email"
            name="email"
            value={data.email || ""}
            onChange={handleChange}
          />
          <Input
            type="text"
            title="Логин"
            placeholder="Имя пользователя"
            id="username"
            name="username"
            value={data.username || ""}
            onChange={handleChange}
          />
          <Input
            type="text"
            title="Пароль"
            placeholder="Пароль"
            id="password"
            name="password"
            value={data.password || ""}
            onChange={handleChange}
          />
          <button type="submit" className={styles.auth__button}>
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
