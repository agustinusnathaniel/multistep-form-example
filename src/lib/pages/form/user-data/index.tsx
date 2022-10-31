import { Box, Button, Grid, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

import ControlledInput from "lib/components/shared/form/ControlledInput";
import { handleRouteBack } from "lib/utils/handleRouteBack";

import { useUserDataForm } from "./hook";

const UserDataFormPage = () => {
  const router = useRouter();
  const { register, handleClickNext, isValid } = useUserDataForm();

  return (
    <Grid gap={6}>
      <Box>
        <Button onClick={handleRouteBack(router)}>Back</Button>

        <Heading>User Data</Heading>
      </Box>

      <Grid gap={4}>
        <ControlledInput {...register("name")} label="Name" type="text" />
        <ControlledInput {...register("age")} label="Age" type="number" />
        <ControlledInput {...register("email")} label="E-mail" type="email" />
        <ControlledInput
          {...register("phoneNumber")}
          label="Phone Number"
          type="tel"
        />
      </Grid>

      <Button onClick={handleClickNext} isDisabled={!isValid}>
        Next
      </Button>
    </Grid>
  );
};

export default UserDataFormPage;
