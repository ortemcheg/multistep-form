import React, { type FormEventHandler } from "react";
import styles from "./Screen.module.scss";
import { resetForm } from "../state/appReducer";
export interface LastScreenProps {
  dispatch: React.Dispatch<ReturnType<typeof resetForm>>;
}

const Screen2: React.FC<LastScreenProps> = ({ dispatch }) => {
  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(resetForm());
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <output>You've reached the end. Congrats!</output>
      <button>finish</button>
    </form>
  );
};

export default Screen2;
