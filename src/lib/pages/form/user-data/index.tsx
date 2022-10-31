import { Box, Button, Grid, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

import ControlledInput from "lib/components/shared/form/ControlledInput";
import { handleRouteBack } from "lib/utils/handleRouteBack";

import { useUserDataForm } from "./hook";

const UserDataFormPage = () => {
  const router = useRouter();
  const { register, handleClickNext, errors } = useUserDataForm();

  return (
    <Grid gap={6}>
      <Box>
        <Button onClick={handleRouteBack(router)}>Back</Button>

        <Heading>User Data</Heading>
      </Box>

      <Grid gap={4}>
        <ControlledInput
          {...register("name")}
          label="Name"
          type="text"
          isInvalid={!!errors.name?.message}
          errorText={errors.name?.message}
        />
        <ControlledInput
          {...register("age", {
            valueAsNumber: true,
          })}
          label="Age"
          type="number"
          isInvalid={!!errors.age?.message}
          errorText={errors.age?.message}
        />
        <ControlledInput
          {...register("email")}
          label="E-mail"
          type="email"
          isInvalid={!!errors.email?.message}
          errorText={errors.email?.message}
        />
        <ControlledInput
          {...register("phoneNumber")}
          label="Phone Number"
          type="tel"
          isInvalid={!!errors.phoneNumber?.message}
          errorText={errors.phoneNumber?.message}
        />
      </Grid>

      <Button onClick={handleClickNext}>Next</Button>
    </Grid>
  );
};

export default UserDataFormPage;
