import { useParams } from "react-router";
import React from "react";
import styles from "./styles.module.scss";
import { usersList } from "./ListOfUsers";

export const UserPage = () => {
  const params = useParams<any>();
  const user = usersList.find((user) => {
    return user.id === params.userId;
  });
  const [userData, setUserData] = React.useState({
    location: "",
    avatar_url: "",
    followers: "",
    name: "",
  });

  React.useEffect(() => {
    user?.gitLink &&
      fetch(`https://api.github.com/users/${user?.gitLink}`).then((resp) => {
        resp.json().then((userData) => {
          userData && setUserData(userData);
          console.log(userData);
        });
      });
  }, []);
  console.log(params);
  return (
    <div className={styles["wrapper-user"]}>
      <h2>{userData?.name}</h2>
      <img src={`${userData?.avatar_url}`} />
      <h2>Location: {userData?.location}</h2>
      <p>Followers: {userData?.followers}</p>
    </div>
  );
};
