import { AnyAction } from "@reduxjs/toolkit";
import { type State } from "../state/appReducer";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";

export const getScreen = (
  currentScreen: number,
  state: State,
  dispatch: React.Dispatch<AnyAction>
): React.ReactNode => {
  switch (currentScreen) {
    case 0:
      return <Screen1 dispatch={dispatch} />;
    case 1:
      return <Screen2 dispatch={dispatch} />;
    case 2:
      return <Screen3 dispatch={dispatch} data={state.formData} />;
    default:
      return <div>🤷🏼‍♂️</div>;
  }
};
