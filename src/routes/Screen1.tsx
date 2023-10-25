import React, { type FormEventHandler } from "react";
import styles from "./Screen.module.scss";
import { addData } from "../state/appReducer";
import useGetCountries from "./useGetCountries";

export interface ScreenProps {
  dispatch: React.Dispatch<ReturnType<typeof addData>>;
}

const Screen1: React.FC<ScreenProps> = ({ dispatch }) => {
  const { status: countryApiStatus, data: countries } = useGetCountries();
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
  console.log({
    countryApiStatus,
    countries,
  });

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <ul>
        <li>
          <label htmlFor="username">username</label>
          <input type="text" id="username" />
        </li>
        <li>
          <label htmlFor="email">email</label>
          <input type="email" id="email" />
        </li>
        <li>
          <label htmlFor="phoneNumber">phone number</label>
          <input type="tel" id="phoneNumber" />
        </li>
        <li>
          <label htmlFor="country">country</label>
          <select id="country">
            {countryApiStatus === "success"
              ? countries.map((country) => (
                  <option key={country}>{country}</option>
                ))
              : null}
          </select>
        </li>
      </ul>
      <button type="submit">continue</button>
    </form>
  );
};

export default Screen1;
