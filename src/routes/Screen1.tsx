import React from "react";
import styles from "./Screen.module.scss";
import { addData } from "../state/appReducer";
import Select from "../components/common/Select/Select";
import FormInput from "../components/common/FormInput/FormInput";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useGetCountries from "./useGetCountries";

import { z } from "zod";

const validPhonePattern = /^\+?\(?[0-9]{3}\)?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const formValidationSchema = z
  .object({
    username: z.string().trim().min(4).max(12),
    email: z.string().trim().email(),
    phoneNumber: z.string().trim().regex(validPhonePattern),
    country: z.string().trim(),
  })
  .required();

export interface ScreenProps {
  dispatch: React.Dispatch<ReturnType<typeof addData>>;
}

type FormInputs = z.infer<typeof formValidationSchema>;

const Screen1: React.FC<ScreenProps> = ({ dispatch }) => {
  const { status: countryApiStatus, data: countries } = useGetCountries();
  const {
    control,
    formState: { errors, isValid: isFormValid },
    handleSubmit,
  } = useForm<FormInputs>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      username: "",
      phoneNumber: "",
      email: "",
      country: "",
    },
  });

  const submitHandler: SubmitHandler<FormInputs> = (data) => {
    const { username, email, phoneNumber, country } = data;
    dispatch(
      addData({
        username,
        email,
        phoneNumber,
        country,
      })
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      <ul>
        <li>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <FormInput
                type="text"
                label="Username"
                {...field}
                isError={"username" in errors}
                errorMessage={
                  "username" in errors ? errors.username?.message : ""
                }
                autoComplete="username"
              />
            )}
          />
        </li>
        <li>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <FormInput
                type="email"
                label="Email"
                {...field}
                isError={"email" in errors}
                errorMessage={"email" in errors ? errors.email?.message : ""}
                autoComplete="username"
                inputMode="email"
              />
            )}
          />
        </li>
        <li>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <FormInput
                type="tel"
                label="Phone Number"
                {...field}
                isError={"phoneNumber" in errors}
                errorMessage={
                  "phoneNumber" in errors ? "Invalid phone number" : ""
                }
                inputMode="tel"
                autoComplete="tel"
              />
            )}
          />
        </li>
        <li>
          {countryApiStatus === "success" && (
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  label="Country"
                  items={countries}
                  isValid={"country" in errors}
                  errorMessage={"country" in errors ? "Choose a country" : ""}
                />
              )}
            />
          )}
        </li>
      </ul>
      <button type="submit" disabled={!isFormValid}>
        continue
      </button>
    </form>
  );
};

export default Screen1;
