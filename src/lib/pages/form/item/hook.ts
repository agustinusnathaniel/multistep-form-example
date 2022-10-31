import { useRouter } from "next/router";
import * as React from "react";
import { useForm } from "react-hook-form";

import { useSubmissionFormStore } from "lib/stores/form";

import type { ItemForm } from "./types";

export const useItemForm = () => {
  const router = useRouter();
  const form = useSubmissionFormStore((state) => state.form);
  const defaultValue: ItemForm = React.useMemo(
    () => ({
      price: form.price,
      description: form.description,
      categories: form.categories,
    }),
    [form]
  );

  const updateForm = useSubmissionFormStore((state) => state.updateForm);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid },
  } = useForm<ItemForm>({
    defaultValues: defaultValue,
    mode: "onChange",
  });

  const proceedToConfirmation = () => {
    if (!isValid) {
      return;
    }
    const values = getValues();
    const hello = {
      price: values.price,
      description: values.description,
      categories: values.categories,
    };
    updateForm(hello);
    router.push("/form/confirmation");
  };

  return {
    register,
    handleClickNext: handleSubmit(proceedToConfirmation),
    isValid,
  };
};
