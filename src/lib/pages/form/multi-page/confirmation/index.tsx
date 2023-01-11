import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

import FormInputConfirmation from "lib/components/form/submission/steps/FormInputConfirmation";
import { useSubmissionFormStore } from "lib/stores/form";
import { useItemDataListener } from "lib/stores/form/useItemData";
import { handleRouteBack } from "lib/utils/handleRouteBack";

const FormConfirmationPage = () => {
  const router = useRouter();
  const toast = useToast();

  const resetForm = useSubmissionFormStore((state) => state.resetForm);

  useItemDataListener({ router, toast });

  const handleClickNext = () => {
    router.push("/form/success").then(() => {
      resetForm();
    });
  };

  return (
    <FormInputConfirmation
      onClickBack={handleRouteBack(router)}
      onClickNext={handleClickNext}
    />
  );
};

export default FormConfirmationPage;
