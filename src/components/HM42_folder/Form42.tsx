import { useForm } from "react-hook-form";
import classnames from "classnames";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./form42.scss";
import { ItemWrapper } from "./WrapperItem";

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "Your First Name is too short")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Your Last Name is too short")
    .required("Required"),
  email: Yup.string().email("Please enter correct email").required("Required"),
});

export const Form42 = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForm>({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit((values) => {
    console.log("onSubmit", values);
  });

  return (
    <div className="global-wrapper">
      <h2>HM 42</h2>
      <form onSubmit={onSubmit} className="form">
        <ItemWrapper label={"First Name:"} error={errors.firstName?.message}>
          <input
            className={classnames({ errorInput: errors.firstName?.message })}
            {...register("firstName")}
            placeholder="Your First Name"
            type="text"
            name={"firstName"}
          />
        </ItemWrapper>
        <ItemWrapper label={"Last Name:"} error={errors.lastName?.message}>
          <input
            className={classnames({ errorInput: errors.lastName?.message })}
            {...register("lastName")}
            placeholder="Your Last Name"
            type="text"
            name={"lastName"}
          />
        </ItemWrapper>
        <ItemWrapper label={"E-mail:"} error={errors.email?.message}>
          <input
            className={classnames({ errorInput: errors.email?.message })}
            {...register("email")}
            placeholder="Email"
            type="text"
            name={"email"}
          />
        </ItemWrapper>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};
