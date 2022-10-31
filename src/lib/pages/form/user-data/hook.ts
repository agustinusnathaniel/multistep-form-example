import { useRouter } from "next/router";
import * as React from "react";
import { useForm } from "react-hook-form";

import { useSubmissionFormStore } from "lib/stores/form";

import type { UserDataForm } from "./types";

export const useUserDataForm = () => {
  const router = useRouter();
  const form = useSubmissionFormStore((state) => state.form);
  const defaultValue: UserDataForm = React.useMemo(
    () => ({
      name: form.name,
      age: form.age,
      email: form.email,
      phoneNumber: form.phoneNumber,
    }),
    [form]
  );
  const updateForm = useSubmissionFormStore((state) => state.updateForm);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid },
  } = useForm<UserDataForm>({
    defaultValues: defaultValue,
    mode: "onChange",
  });

  const proceedToItemForm = () => {
    if (!isValid) {
      return;
    }
    const values = getValues();
    const hello = {
      name: values.name,
      age: values.age,
      email: values.email,
      phoneNumber: values.phoneNumber,
    };
    updateForm(hello);
    router.push("/form/item");
  };

  return {
    register,
    handleClickNext: handleSubmit(proceedToItemForm),
    isValid,
  };
};
