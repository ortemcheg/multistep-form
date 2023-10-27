import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { type ScreenProps } from "./Screen1";
import styles from "./Screen.module.scss";
import { addData } from "../state/appReducer";
import FormInput from "../components/common/FormInput/FormInput";

const formValidationSchema = z
  .object({
    password: z.string().min(8).max(16),
    confirmPassword: z.string().min(8).max(16),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    // path: ["confirm"], // path of error
  });

const Screen2: React.FC<ScreenProps> = ({ dispatch }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formValidationSchema>>({
    resolver: zodResolver(formValidationSchema),
  });
  const submitHandler: SubmitHandler<z.infer<typeof formValidationSchema>> = (
    data
  ) => {
    const { password } = data;
    dispatch(
      addData({
        password,
      })
    );
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      <ul>
        <li>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <FormInput
                label="Password"
                type="password"
                {...field}
                isError={"password" in errors}
                errorMessage={"password" in errors ? "Invalid password" : ""}
              />
            )}
          />
        </li>
        <li>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <FormInput
                label="Confirm Password"
                type="password"
                {...field}
                isError={"confirmPassword" in errors}
                errorMessage={
                  "confirmPassword" in errors ? "Passwords don't match" : ""
                }
              />
            )}
          />
        </li>
      </ul>
      <button type="submit">continue</button>
    </form>
  );
};

export default Screen2;
