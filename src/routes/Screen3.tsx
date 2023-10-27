import React, { type FormEventHandler } from "react";
import styles from "./Screen.module.scss";
import { resetForm } from "../state/appReducer";
import { type State } from "../state/appReducer";
export interface LastScreenProps {
  data: State["formData"];
  dispatch: React.Dispatch<ReturnType<typeof resetForm>>;
}

const Screen2: React.FC<LastScreenProps> = ({ dispatch, data }) => {
  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(resetForm());
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <output>
        <table className={styles.table}>
          <tbody>
            {Object.entries(data)
              .filter(([name, _]) => name !== "password")
              .map(([name, value]) => (
                <tr>
                  <td>{name}</td>
                  <td>{value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </output>
      <button>finish</button>
    </form>
  );
};

export default Screen2;
