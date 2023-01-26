import * as React from "react";

import type { SubmissionFormRequest } from "lib/models/form-superstruct/request";
import { useSubmissionFormStore } from "lib/stores/form";

export const useConfirmation = () => {
  const storedForm = useSubmissionFormStore((state) => state.form);
  const [form, setForm] = React.useState<SubmissionFormRequest>();

  React.useEffect(() => {
    setForm(storedForm);
  }, [storedForm]);

  return {
    form,
  };
};
