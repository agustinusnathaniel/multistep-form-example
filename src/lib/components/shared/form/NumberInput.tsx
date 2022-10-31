import type { NumberInputProps } from "@chakra-ui/react";
import { forwardRef, NumberInput, NumberInputField } from "@chakra-ui/react";
import type { LegacyRef } from "react";

import type { FormControlWrapperProps } from "./FormControlWrapper";
import FormControlWrapper from "./FormControlWrapper";

type AppNumberInputProps = FormControlWrapperProps & NumberInputProps;

const AppNumberInput = forwardRef(
  (
    {
      label,
      labelAddon,
      errorText,
      errorTextColor,
      helperText,
      helperTextColor,
      isInvalid,
      isLoaded = true,
      isRequired,
      min = 0,
      max,
      borderRadius,
      errorBorderColor = "red.200",
      ...numberInputProps
    }: AppNumberInputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <FormControlWrapper
        label={label}
        labelAddon={labelAddon}
        errorText={errorText}
        errorTextColor={errorTextColor}
        helperText={helperText}
        helperTextColor={helperTextColor}
        isInvalid={isInvalid}
        isLoaded={isLoaded}
      >
        <NumberInput
          {...numberInputProps}
          min={min}
          max={max}
          isRequired={isRequired}
          errorBorderColor={errorBorderColor}
          ref={ref}
        >
          <NumberInputField borderRadius={borderRadius} />
        </NumberInput>
      </FormControlWrapper>
    );
  }
);

AppNumberInput.displayName = "AppNumberInput";

export default AppNumberInput;
