import { Box, Button, Grid } from "@chakra-ui/react";

import FormSubmissionSteps from "lib/components/form/submission/steps";

import { useSubmissionFormWrapper } from "./hook";

const FormSubmissionPage = () => {
  const { handleTapBack, handleTapNext, currentStep, hasHydrated } =
    useSubmissionFormWrapper();

  return (
    <Grid gap={6}>
      <Box>
        <Button onClick={handleTapBack}>Back</Button>
      </Box>

      {hasHydrated && <FormSubmissionSteps currentStep={currentStep} />}

      <Button onClick={handleTapNext}>Next</Button>
    </Grid>
  );
};

export default FormSubmissionPage;
