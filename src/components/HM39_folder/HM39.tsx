import React, { FormEvent } from "react";
import styles from "./hm39.module.scss";

export const InputForm = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastNameError, setFLastNameError] = React.useState("");

  const handleChangeFirst = (e: any) => {
    setFirstName(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeLast = (e: any) => {
    setLastName(e.target.value);
  };

  return (
    <div>
      <form
        className={styles["inputForm39"]}
        onSubmit={(e) => {
          e.preventDefault();
          const target: any = e.target;

          const firstNameValid = target.elements.firstName.value.length > 3;
          const lastNameValid = target.elements.lastName.value.length > 3;
          if (!firstNameValid) {
            setFirstNameError("First Name is too short");
          } else setFirstNameError("");
          if (!lastNameValid) {
            setFLastNameError("Last Name is too short");
          } else setFLastNameError("");
        }}
      >
        <p className={styles["headName"]}>HM 39</p>

        <input
          className={styles["inputStyle"]}
          type="text"
          placeholder="Enter your First Name"
          value={firstName}
          name="firstName"
          onChange={handleChangeFirst}
        />

        <p className={styles["error"]}>{firstNameError}</p>
        <br />
        <input
          className={styles["inputStyle"]}
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Enter your Last Name"
          onChange={handleChangeLast}
        />

        <p className={styles["error"]}>{lastNameError}</p>
        <br />

        <button className={styles["submitButton"]} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
