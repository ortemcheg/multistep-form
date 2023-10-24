import reducer, { addData, initialState, resetForm } from "./appReducer";
import { type State } from "./appReducer";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test("should handle form data being added to/removed from the app state and updating step count", () => {
  const mockFormData: Partial<State["formData"]> = {
    username: "test user",
    email: "test@email.com",
    country: "test country",
    phoneNumber: "+1234567890",
  };
  const { navigation, formData } = reducer(initialState, addData(mockFormData));
  expect(navigation.currentScreen).toBe(1);
  expect(formData).toEqual({
    username: mockFormData.username,
    email: mockFormData.email,
    country: mockFormData.country,
    phoneNumber: mockFormData.phoneNumber,
    password: "",
  });
});

test("Should be able to reset the form data to the initial state", () => {
  const mockFormData: Partial<State["formData"]> = {
    username: "test user",
    email: "test@email.com",
    country: "test country",
    phoneNumber: "+1234567890",
  };
  const newState = reducer(initialState, addData(mockFormData));
  expect(newState).not.toEqual(initialState);
  const resetState = reducer(initialState, resetForm());
  expect(resetState).toEqual(initialState);
});
