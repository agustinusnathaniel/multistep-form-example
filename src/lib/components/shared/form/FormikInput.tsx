import type { ControlledInputProps } from "./ControlledInput";
import ControlledInput from "./ControlledInput";

type FormikInputProps = {
  error?: string;
  touched?: boolean;
} & ControlledInputProps;

const FormikInput = ({
  touched,
  error,
  ...controlledInputProps
}: FormikInputProps) => {
  return (
    <ControlledInput
      isInvalid={touched && !!error}
      errorText={touched && error}
      {...controlledInputProps}
    />
  );
};

export default FormikInput;
