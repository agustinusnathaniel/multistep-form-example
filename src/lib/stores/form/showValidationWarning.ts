import type { CreateToastFnReturn } from "@chakra-ui/react";

export const showValidationWarning = (toast: CreateToastFnReturn) => {
  const id = "form-validation-toast";
  if (!toast.isActive(id)) {
    toast({
      id,
      description:
        "You haven't filled any data, please fill in your information",
      position: "top",
      status: "warning",
    });
  }
};
