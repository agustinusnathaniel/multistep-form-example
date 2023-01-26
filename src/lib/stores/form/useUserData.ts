import type { CreateToastFnReturn } from "@chakra-ui/react";
import type { NextRouter } from "next/router";
import * as React from "react";
import * as ss from "superstruct";

import type { UserDataForm } from "lib/models/form-superstruct/user-data";
import { userDataFormScheme } from "lib/models/form-superstruct/user-data";

import { useSubmissionFormStore } from "./index";
import { showValidationWarning } from "./showValidationWarning";

export const useUserData = () => {
  const form = useSubmissionFormStore((state) => state.form);
  const storedUserData: UserDataForm = React.useMemo(
    () => ({
      name: form.name,
      age: form.age,
      email: form.email,
      phoneNumber: form.phoneNumber,
    }),
    [form]
  );
  const isUserDataValid = React.useMemo(() => {
    const [err] = ss.validate(storedUserData, userDataFormScheme);
    return !err;
  }, [storedUserData]);

  return { storedUserData, isUserDataValid };
};

type UseUserDataListenerDeps = {
  router: NextRouter;
  toast: CreateToastFnReturn;
};

export const useUserDataListener = ({
  router,
  toast,
}: UseUserDataListenerDeps) => {
  const { isUserDataValid } = useUserData();

  React.useEffect(() => {
    if (!isUserDataValid) {
      router.replace("/form/user-data").then(() => {
        showValidationWarning(toast);
      });
    }
  }, [isUserDataValid, router, toast]);
};
