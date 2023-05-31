import { nanoid } from "nanoid";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import styles from "./styles.module.scss";
import { UserPage } from "./UserPage";

export const usersList = [
  {
    id: nanoid(),
    name: "Tom Preston-Werner",
    gitLink: "mojombo",
  },
  {
    id: nanoid(),
    name: "Chris Wanstrath",
    gitLink: "defunkt",
  },
  {
    id: nanoid(),
    name: "Ezra Zygmuntowic",
    gitLink: "ezmobius",
  },
  {
    id: nanoid(),
    name: "Michael D. Ivey",
    gitLink: "ivey",
  },
  {
    id: nanoid(),
    name: "Evan Phoenix",
    gitLink: "evanphx",
  },
];

export const ListOfUsers = () => {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <div>
          <ul>
            {usersList.map((user) => {
              return (
                <>
                  <li key={user.id}>
                    {user.name}
                    <NavLink to={`${path}/usersList/${user.id}`}>
                      <button className={styles["btn"]}>See more</button>
                    </NavLink>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </Route>
      <Route exact={true} path={`${path}/usersList/:userId`}>
        <UserPage />
      </Route>
    </Switch>
  );
};
