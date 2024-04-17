import * as React from "react";
import axios from "axios";

interface IProfile {
  name: string;
  surname: string;
  username: string;
  date: Date | null;
  position: string;
}

const Profile = () => {
  const [data, setData] = React.useState<IProfile>({
    name: "",
    surname: "",
    username: "",
    date: null,
    position: "",
  });

  React.useEffect(() => {
    axios
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
      );
  });
  return <div>Profile</div>;
};

export default Profile;
