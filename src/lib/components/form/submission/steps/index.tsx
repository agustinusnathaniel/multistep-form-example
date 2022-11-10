type FormSubmissionStepsProps = {
  currentStep: number;
};

const FormSubmissionSteps = ({ currentStep }: FormSubmissionStepsProps) => {
  switch (currentStep) {
    case 1:
      return <>Hello</>;
    case 2:
      return <>Hi</>;
    case 3:
      return <>Heyho</>;
    default:
      return null;
  }
};

export default FormSubmissionSteps;
