import styles from "./Screen.module.css";
export default function Screen1() {
  return (
    <form className={styles.form}>
      <output>You've reached the end. Congrats!</output>
      <button>finish</button>
    </form>
  );
}
