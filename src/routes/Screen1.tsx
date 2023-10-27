import React, { type FormEventHandler } from "react";
import styles from "./Screen.module.scss";
import { addData } from "../state/appReducer";
import Select from "../components/common/Select/Select";
import FormInput from "../components/common/FormInput/FormInput";
import useGetCountries from "./useGetCountries";

import { z } from "zod";

const validPhonePattern = /^\+?\(?[0-9]{3}\)?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const formValidationSchema = z
  .object({
    username: z.string().trim().min(4).max(12),
    email: z.string().trim().email(),
    phoneNumber: z.string().trim().regex(validPhonePattern),
    country: z.string().trim(),
  })
  .required();

export interface ScreenProps {
  dispatch: React.Dispatch<ReturnType<typeof addData>>;
}

const Screen1: React.FC<ScreenProps> = ({ dispatch }) => {
  // const { status: countryApiStatus, data: countries } = useGetCountries();
  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(
      addData({
        username: "tester",
        email: "hello@world",
        phoneNumber: "234",
        country: "Ahaha",
      })
    );
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <ul>
        <li>
          <FormInput type="text" label="Username" />
        </li>
        <li>
          <FormInput type="email" label="Email" />
        </li>
        <li>
          <FormInput type="telemele" label="Phone number" />
        </li>
        <li>
          <Select label="Country" />
        </li>
      </ul>
      <button type="submit">continue</button>
    </form>
  );
};

export default Screen1;
