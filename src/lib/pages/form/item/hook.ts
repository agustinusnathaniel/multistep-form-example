import { useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import * as React from "react";
import { useForm } from "react-hook-form";

import type { ItemForm } from "lib/models/form/item-form";
import { itemFormScheme } from "lib/models/form/item-form";
import { useSubmissionFormStore } from "lib/stores/form";
import { useUserDataListener } from "lib/stores/form/useUserData";

export const useItemForm = () => {
  const router = useRouter();
  const toast = useToast();
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
    router.push("/form/confirmation");
  };

  useUserDataListener({ router, toast });

  return {
    register,
    handleClickNext: handleSubmit(proceedToConfirmation),
    isValid,
    errors,
  };
};
