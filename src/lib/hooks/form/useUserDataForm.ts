import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import type { UserDataForm } from "lib/models/form/user-data";
import { userDataFormScheme } from "lib/models/form/user-data";
import { useSubmissionFormStore } from "lib/stores/form";
import { useUserData } from "lib/stores/form/useUserData";

export interface UseUserDataFormParams {
  onSuccessfulStore?: () => void;
}

export const useUserDataForm = ({
  onSuccessfulStore,
}: UseUserDataFormParams) => {
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

  const storeUserData = () => {
    if (!isValid) {
      return;
    }
    const values = getValues();
    const userData = {
      name: values.name,
      age: values.age,
      email: values.email,
      phoneNumber: values.phoneNumber,
    };
    updateForm(userData);
    onSuccessfulStore?.();
  };

  return {
    register,
    handleClickNext: handleSubmit(storeUserData),
    isValid,
    isDirty,
    errors,
  };
};
