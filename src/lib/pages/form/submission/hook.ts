import { useRouter } from "next/router";

import { useHasHydrated } from "lib/hooks/useHasHydrated";
import { useSubmissionFormStore } from "lib/stores/form";
import { useSubmissionFormWrapperStore } from "lib/stores/form-wrapper";
import { handleRouteBack } from "lib/utils/handleRouteBack";

const TOTAL_SUBMISSION_STEP = 3;

export const useSubmissionFormWrapper = () => {
  const router = useRouter();
  const hasHydrated = useHasHydrated();
  const currentStep = useSubmissionFormWrapperStore(
    (state) => state.currentStep
  );
  const setCurrentStep = useSubmissionFormWrapperStore(
    (action) => action.setCurrentStep
  );
  const resetForm = useSubmissionFormStore((state) => state.resetForm);

  const redirectToSuccessPage = () => {
    resetForm();
    router.push("/form/success");
  };

  const handleTapNext = () => {
    if (currentStep === TOTAL_SUBMISSION_STEP) {
      redirectToSuccessPage();
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handleTapBack = () => {
    if (currentStep <= 1) {
      handleRouteBack(router)();
      return;
    }
    setCurrentStep(currentStep - 1);
  };

  return {
    handleTapNext,
    handleTapBack,
    currentStep,
    hasHydrated,
  };
};
