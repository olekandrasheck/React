import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./Form.module.scss";

interface IFormFormik {
  firstName: string;
  lastName: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "First name is too short")
    .required("Required"),
  lastName: Yup.string().min(3, "Last name is too short").required("Required"),
});

const initialValues: IFormFormik = { firstName: "", lastName: "" };

export const FormFormik = () => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values: IFormFormik) => {
        console.log("values", values);
      }}
    >
      {({ touched, values, errors, isValid, handleBlur, handleChange }) => {
        console.log("touched", touched);
        console.log("values", values);
        console.log("errors", errors);
        return (
          <Form className={styles["form-wrapper"]}>
            <h2 className={styles["header"]}>HM 40</h2>
            <label className={styles["labelName"]}>
              First Name:
              <Field
                className={styles["input"]}
                type="text"
                placeholder="Enter tour First Name"
                name="firstName"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            <p className={styles["errorMessage"]}>{errors.firstName}</p>
            <br />
            <label className={styles["labelName"]}>
              Last Name:
              <Field
                className={styles["input"]}
                type="text"
                name="lastName"
                placeholder="Enter tour Last Name"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            <p className={styles["errorMessage"]}>{errors.lastName}</p>

            <br />
            <button
              type="submit"
              disabled={!isValid}
              className={styles["submit"]}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
