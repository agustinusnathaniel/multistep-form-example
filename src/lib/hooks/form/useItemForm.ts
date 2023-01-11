import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";

import type { ItemForm } from "lib/models/form/item-form";
import { itemFormScheme } from "lib/models/form/item-form";
import { useSubmissionFormStore } from "lib/stores/form";

export interface UseItemFormParams {
  onSuccessfulStore?: () => void;
}

export const useItemForm = ({ onSuccessfulStore }: UseItemFormParams) => {
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
    formState: { isValid, errors },
  } = useForm<ItemForm>({
    defaultValues: defaultValue,
    mode: "onChange",
    resolver: zodResolver(itemFormScheme),
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
    onSuccessfulStore?.();
  };

  return {
    register,
    handleClickNext: handleSubmit(proceedToConfirmation),
    isValid,
    errors,
  };
};
