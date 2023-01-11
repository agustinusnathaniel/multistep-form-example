import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as React from "react";

import type { SubmissionFormRequest } from "lib/models/form/request";
import { useSubmissionFormStore } from "lib/stores/form";
import { useItemDataListener } from "lib/stores/form/useItemData";

export const useConfirmation = () => {
  const router = useRouter();
  const toast = useToast();
  const storedForm = useSubmissionFormStore((state) => state.form);
  const [form, setForm] = React.useState<SubmissionFormRequest>();

  const resetForm = useSubmissionFormStore((state) => state.resetForm);

  const proceedToSuccessScreen = () => {
    router.push("/form/success").then(() => {
      resetForm();
    });
  };

  React.useEffect(() => {
    setForm(storedForm);
  }, [storedForm]);

  useItemDataListener({ router, toast });

  return {
    form,
    handleClickNext: proceedToSuccessScreen,
  };
};
