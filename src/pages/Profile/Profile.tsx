import * as React from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setCaughtError, setErrorMessage } from "../../redux/slices/errorSlice";
import Errors from "../../components/Errors/Errors";
import { useNavigate } from "react-router-dom";
import { instance } from "../../utils/api.config";

interface IProfile {
  name: string;
  surname: string;
  username: string;
  date: Date | null;
  position: string;
}

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const caughtError = useAppSelector((state) => state.errorReducer.caughtError);
  const [data, setData] = React.useState<IProfile>({
    name: "",
    surname: "",
    username: "",
    date: null,
    position: "",
  });

  React.useEffect(() => {
    instance
      .get(
        "http://localhost:8080/api/users/profile/8e002567b4ae47ea89f5e1ddc7184daf"
      )
      .then((response) =>
        setData({
          name: response.data.name,
          surname: response.data.surname,
          username: response.data.username,
          date: response.data.date,
          position: response.data.position,
        })
      )
      .catch((error): void => {
        dispatch(setErrorMessage(error.response.data.message));
        dispatch(setCaughtError(true));
        setTimeout(() => {
          dispatch(setCaughtError(false));
          navigate("/main");
        }, 3000);
      });
  });
  return <div>Profile {caughtError && <Errors />}</div>;
};

export default Profile;
