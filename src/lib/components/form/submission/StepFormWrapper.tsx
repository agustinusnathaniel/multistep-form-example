import { Box, Button, Grid, Heading } from "@chakra-ui/react";

export type StepFormWrapperProps = {
  heading?: string;
  onClickBack: () => void;
  onClickNext: () => void;
  children: React.ReactNode;
};

const StepFormWrapper = ({
  heading,
  onClickBack,
  onClickNext,
  children,
}: StepFormWrapperProps) => {
  return (
    <Grid gap={6}>
      <Box>
        <Button onClick={onClickBack}>Back</Button>

        <Heading>{heading}</Heading>
      </Box>

      <Grid gap={4}>{children}</Grid>

      <Button onClick={onClickNext}>Next</Button>
    </Grid>
  );
};

export default StepFormWrapper;
