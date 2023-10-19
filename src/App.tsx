import styles from "./App.module.css";

const screenNames = ["Initial info", "Password screen", "Review"];

function App() {
  return (
    <div className={styles.container}>
      <header>
        <h1>Super test form</h1>
        <p>Screen name</p>
      </header>
      <main>The main content goes here</main>
      <aside>Screen number</aside>
    </div>
  );
}

export default App;
