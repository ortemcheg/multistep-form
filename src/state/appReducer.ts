import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface State {
  navigation: {
    currentScreen: number;
  };
  formData: {
    [K in
      | "username"
      | "email"
      | "phoneNumber"
      | "country"
      | "password"]: string;
  };
}

export const initialState: State = {
  navigation: {
    currentScreen: 0,
  },
  formData: {
    username: "", // required, string, 4-12 chars
    email: "", // required any valid email
    phoneNumber: "", // required, any valid phone number
    country: "", // required, get async
    password: "", // required, 8-16
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addData(state, action: PayloadAction<Partial<State["formData"]>>) {
      console.log("updating data");
      state.navigation.currentScreen++;
      Object.assign(state.formData, action.payload);
    },
  },
});

export const { addData } = appSlice.actions;
export default appSlice.reducer;
