import { useMemo, useReducer } from "react";
import reducer, { initialState } from "./state/appReducer";
import styles from "./App.module.scss";
import { getScreen } from "./routes/routes";

const screenNames = ["Initial info", "Password screen", "Review screen"];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentScreen } = state.navigation;
  const Screen = useMemo(
    () => getScreen(currentScreen, dispatch),
    [currentScreen]
  );
  return (
    <div className={styles.container}>
      <header>
        <h1>Super test form</h1>
        <p>{screenNames[state.navigation.currentScreen]}</p>
      </header>
      <main>{Screen}</main>
      <aside>Screen number: {state.navigation.currentScreen}</aside>
    </div>
  );
}

export default App;
