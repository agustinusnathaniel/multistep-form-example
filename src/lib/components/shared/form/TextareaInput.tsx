import type { TextareaProps } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

import type { FormControlWrapperProps } from "./FormControlWrapper";
import FormControlWrapper from "./FormControlWrapper";

export type TextareaInputProps = FormControlWrapperProps & TextareaProps;

const TextareaInput = ({
  label,
  errorText,
  errorTextColor,
  helperText,
  helperTextColor,
  isInvalid,
  isRequired,
  ...textareaProps
}: TextareaInputProps) => {
  const textareaElementProps: TextareaProps = {
    borderRadius: 12,
    errorBorderColor: "red.200",
    ...textareaProps,
  };

  return (
    <FormControlWrapper
      label={label}
      isInvalid={isInvalid}
      isRequired={isRequired}
      errorText={errorText}
      errorTextColor={errorTextColor}
      helperText={helperText}
      helperTextColor={helperTextColor}
    >
      <Textarea {...textareaElementProps} isRequired={isRequired} />
    </FormControlWrapper>
  );
};

export default TextareaInput;
