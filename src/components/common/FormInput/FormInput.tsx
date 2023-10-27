import React from "react";
import {
  TextField,
  Label,
  Input,
  Text,
  type TextFieldProps,
} from "react-aria-components";
import styles from "./FormInput.module.scss";
interface FormInputProps extends TextFieldProps {
  label: string;
  type: string;
  name: string;
  isError?: boolean;
  errorMessage?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (props, ref) => {
    const { label, isError, errorMessage, onChange, type } = props;
    return (
      <TextField {...props}>
        <Label className={styles.label}>{label}</Label>
        <Input
          type={type}
          className={`${styles.formInput} ${isError ? styles.error : ""}`}
          onChange={(e) => onChange && onChange(e.target.value)}
          ref={ref}
          value={props.value ?? ""}
        />
        {isError && (
          <Text className={styles.helpText} slot="errorMessage">
            {errorMessage}
          </Text>
        )}
      </TextField>
    );
  }
);

export default FormInput;
