import { useMemo, useReducer } from "react";
import reducer, { initialState } from "./state/appReducer";
import styles from "./App.module.scss";
import { getScreen } from "./routes/routes";
import Grid from "@mui/material/Unstable_Grid2";
import Breadcrumbs from "./components/Breadcrumbs";

const screenNames = ["Initial info", "Password screen", "Review screen"];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentScreen } = state.navigation;
  const Screen = useMemo(
    () => getScreen(currentScreen, dispatch),
    [currentScreen]
  );
  return (
    <Grid container>
      <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
        <header className={styles.header}>
          <h1>Super test form</h1>
          <h2>{screenNames[currentScreen]}</h2>
        </header>
      </Grid>
      <Grid xs={4}>
        <aside>
          <Breadcrumbs stepNames={screenNames} currentStep={currentScreen} />
        </aside>
      </Grid>
      <Grid xs={8}>
        <main>{Screen}</main>
      </Grid>
    </Grid>
  );
}

export default App;
