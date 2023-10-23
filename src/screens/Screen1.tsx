import React, { type FormEventHandler } from "react";
import styles from "./Screen.module.css";
import { addData } from "../state/appReducer";

interface ScreenProps {
  dispatch: React.Dispatch<ReturnType<typeof addData>>;
}

const Screen1: React.FC<ScreenProps> = ({ dispatch }) => {
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
            <option>Afghanistan</option>
            <option>Russia</option>
            <option>United States of America</option>
          </select>
        </li>
        <li>
          <button type="submit">continue</button>
        </li>
      </ul>
    </form>
  );
};

export default Screen1;
