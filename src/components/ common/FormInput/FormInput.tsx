import { TextField, Label, Input, Text } from "react-aria-components";

type PropsFrom<TComponent> = TComponent extends React.FC<infer Props>
  ? Props
  : never;

type InputProps = PropsFrom<typeof Input>;

interface FormInputProps {
  label: string;
  type: InputProps["type"];
}

const FormInput: React.FC<FormInputProps> = ({ label }) => {
  return (
    <TextField>
      <Label>{label}</Label>
      <Input type="" />
      <Text slot="errorMessage">Error goes here</Text>
    </TextField>
  );
};

export default FormInput;
