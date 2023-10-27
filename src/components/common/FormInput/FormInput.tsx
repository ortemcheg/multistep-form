import { TextField, Label, Input, Text } from "react-aria-components";
import styles from "./FormInput.module.scss";

type PropsFrom<TComponent> = TComponent extends React.FC<infer Props>
  ? Props
  : never;

type InputProps = PropsFrom<typeof Input>;

interface FormInputProps {
  label: string;
  type: Exclude<InputProps["type"], undefined>;
  name?: Exclude<InputProps["name"], undefined>;
  isError?: boolean;
  errorMessage?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  isError,
  errorMessage,
}) => {
  return (
    <TextField>
      <Label className={styles.label}>{label}</Label>
      <Input
        type=""
        className={`${styles.formInput} ${isError ? styles.error : ""}`}
      />
      {isError && (
        <Text className={styles.helpText} slot="errorMessage">
          {errorMessage}
        </Text>
      )}
    </TextField>
  );
};

export default FormInput;
