import { useReducer } from "react";
import reducer, { initialState } from "./state/appReducer";
import styles from "./App.module.css";
import Screen1 from "./screens/Screen1";

const screenNames = ["Initial info", "Password screen", "Review screen"];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.container}>
      <header>
        <h1>Super test form</h1>
        <p>{screenNames[state.navigation.currentScreen]}</p>
      </header>
      <main>
        <Screen1 dispatch={dispatch} />
      </main>
      <aside>Screen number: {state.navigation.currentScreen}</aside>
    </div>
  );
}

export default App;
