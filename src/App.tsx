import { useMemo, useReducer } from "react";
import reducer, { initialState } from "./state/appReducer";
import styles from "./App.module.scss";
import { getScreen } from "./routes/routes";
import Breadcrumbs from "./components/Breadcrumbs";

const screenNames = ["Initial info", "Password screen", "Review screen"];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentScreen } = state.navigation;
  const Screen = useMemo(
    () => getScreen(currentScreen, state, dispatch),
    [currentScreen, state]
  );
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Super test form</h1>
        <h2>{screenNames[currentScreen]}</h2>
      </header>
      <aside className={styles.sidebar}>
        <Breadcrumbs stepNames={screenNames} currentStep={currentScreen} />
      </aside>
      <main>{Screen}</main>
    </div>
  );
}

export default App;
