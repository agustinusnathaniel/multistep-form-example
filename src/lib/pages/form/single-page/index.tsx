import FormSubmissionSteps from "lib/components/form/submission/steps/FormSubmissionStepWrapper";

import { useSubmissionFormWrapper } from "./hook";

const FormSubmissionPage = () => {
  const { handleTapBack, handleTapNext, currentStep, hasHydrated } =
    useSubmissionFormWrapper();

  if (hasHydrated) {
    return (
      <FormSubmissionSteps
        currentStep={currentStep}
        onClickBack={handleTapBack}
        onClickNext={handleTapNext}
      />
    );
  }

  return null;
};

export default FormSubmissionPage;
