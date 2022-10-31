import type { CreateToastFnReturn } from "@chakra-ui/react";
import type { NextRouter } from "next/router";
import * as React from "react";

import type { UserDataForm } from "lib/models/form/user-data";
import { userDataFormScheme } from "lib/models/form/user-data";

import { useSubmissionFormStore } from "./index";

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
  const isUserDataValid = React.useMemo(
    () => !!userDataFormScheme.safeParse(storedUserData).success,
    [storedUserData]
  );

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
      router.replace("/form/user-data");
      toast({
        description:
          "You haven't filled any data, please fill in your information",
        position: "top",
        status: "warning",
      });
    }
  }, [isUserDataValid, router, toast]);
};
