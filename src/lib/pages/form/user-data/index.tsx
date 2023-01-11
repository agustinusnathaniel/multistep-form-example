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
          errorText={errors.name?.message}
          placeholder="Your name"
        />
        <ControlledInput
          {...register("age", {
            valueAsNumber: true,
          })}
          label="Age"
          type="number"
          errorText={errors.age?.message}
          placeholder="Your age"
        />
        <ControlledInput
          {...register("email")}
          label="E-mail"
          type="email"
          errorText={errors.email?.message}
          placeholder="name@example.com"
        />
        <ControlledInput
          {...register("phoneNumber")}
          label="Phone Number"
          type="tel"
          errorText={errors.phoneNumber?.message}
          placeholder="62812345678"
        />
      </Grid>

      <Button onClick={handleClickNext}>Next</Button>
    </Grid>
  );
};

export default UserDataFormPage;
