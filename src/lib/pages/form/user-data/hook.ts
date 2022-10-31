import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import type { UserDataForm } from "lib/models/form/user-data";
import { userDataFormScheme } from "lib/models/form/user-data";
import { useSubmissionFormStore } from "lib/stores/form";
import { useUserData } from "lib/stores/form/useUserData";

export const useUserDataForm = () => {
  const router = useRouter();
  const { storedUserData } = useUserData();
  const updateForm = useSubmissionFormStore((state) => state.updateForm);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, errors, isDirty },
  } = useForm<UserDataForm>({
    defaultValues: storedUserData,
    mode: "onChange",
    resolver: zodResolver(userDataFormScheme),
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
    isDirty,
    errors,
  };
};
