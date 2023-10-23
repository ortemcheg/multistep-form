import React, { type FormEventHandler } from "react";
import { type ScreenProps } from "./Screen1";
import styles from "./Screen.module.css";
import { addData } from "../state/appReducer";

const Screen2: React.FC<ScreenProps> = ({ dispatch }) => {
  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(
      addData({
        password: "test_password",
      })
    );
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <ul>
        <li>
          <label htmlFor="password">password</label>
          <input type="password" id="password" />
        </li>
        <li>
          <label htmlFor="repeatedpassword">repeat password</label>
          <input type="password" id="repeatedpassword" />
        </li>
        <li>
          <button type="submit">continue</button>
        </li>
      </ul>
    </form>
  );
};

export default Screen2;
