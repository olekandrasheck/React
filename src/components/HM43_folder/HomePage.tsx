import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import styles from "./styles.module.scss";
import { ListOfUsers } from "./ListOfUsers";

export const HomePage = () => {
  return (
    <div className={styles["wrapper"]}>
      <BrowserRouter>
        <h2>HM 43</h2>
        <Link to="/" className={styles["link"]}>
          Home
        </Link>

        <Link to="/list" className={styles["link"]}>
          List of users
        </Link>
        <div className="routedCpontent">
          <Switch>
            <Route path="/list">
              <ListOfUsers />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};
