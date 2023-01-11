import type { StepFormWrapperProps } from "lib/components/form/submission/StepFormWrapper";

import FormInputConfirmation from "./FormInputConfirmation";
import ItemForm from "./ItemForm";
import UserDataForm from "./UserDataForm";

type FormSubmissionStepWrapperProps = {
  currentStep: number;
} & Pick<StepFormWrapperProps, "onClickBack" | "onClickNext">;

const FormSubmissionStepWrapper = ({
  currentStep,
  onClickBack,
  onClickNext,
}: FormSubmissionStepWrapperProps) => {
  switch (currentStep) {
    case 1:
      return (
        <UserDataForm
          onClickBack={onClickBack}
          onSuccessfulStore={onClickNext}
        />
      );
    case 2:
      return (
        <ItemForm onClickBack={onClickBack} onSuccessfulStore={onClickNext} />
      );
    case 3:
      return (
        <FormInputConfirmation
          onClickBack={onClickBack}
          onClickNext={onClickNext}
        />
      );
    default:
      return null;
  }
};

export default FormSubmissionStepWrapper;
