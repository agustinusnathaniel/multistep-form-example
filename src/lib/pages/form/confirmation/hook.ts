import { useRouter } from "next/router";
import * as React from "react";

import type { SubmissionFormRequest } from "lib/models/submission-form";
import { useSubmissionFormStore } from "lib/stores/form";

export const useConfirmation = () => {
  const router = useRouter();
  const storedForm = useSubmissionFormStore((state) => state.form);
  const [form, setForm] = React.useState<SubmissionFormRequest>();

  const resetForm = useSubmissionFormStore((state) => state.resetForm);

  const proceedToItemForm = () => {
    resetForm();
    router.push("/form/success");
  };

  React.useEffect(() => {
    setForm(storedForm);
  }, [storedForm]);

  return {
    form,
    handleClickNext: proceedToItemForm,
  };
};
