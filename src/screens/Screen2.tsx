import styles from "./Screen.module.css";

export default function Screen1() {
  return (
    <form className={styles.form}>
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
}
