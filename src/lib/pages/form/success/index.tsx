import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Grid,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const SuccessPage = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.replace("/");
  };

  return (
    <Grid gap={6}>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        borderRadius={24}
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Form submitted!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for submitting your data. Our team will get back to you soon.
        </AlertDescription>
      </Alert>

      <Button onClick={handleBackToHome}>Back to Home</Button>
    </Grid>
  );
};

export default SuccessPage;
