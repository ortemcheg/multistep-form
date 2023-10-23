import { useReducer } from "react";
import reducer, { initialState } from "./state/appReducer";
import styles from "./App.module.css";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";

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
        {state.navigation.currentScreen === 0 && (
          <Screen1 dispatch={dispatch} />
        )}
        {state.navigation.currentScreen === 1 && (
          <Screen2 dispatch={dispatch} />
        )}
        {state.navigation.currentScreen === 2 && (
          <Screen3 dispatch={dispatch} />
        )}
      </main>
      <aside>Screen number: {state.navigation.currentScreen}</aside>
    </div>
  );
}

export default App;
