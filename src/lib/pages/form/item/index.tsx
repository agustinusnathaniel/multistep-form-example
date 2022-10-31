import { Box, Button, Grid, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

import ControlledInput from "lib/components/shared/form/ControlledInput";
import { handleRouteBack } from "lib/utils/handleRouteBack";

import { useItemForm } from "./hook";

const ItemFormPage = () => {
  const router = useRouter();
  const { register, handleClickNext, isValid } = useItemForm();

  return (
    <Grid gap={6}>
      <Box>
        <Button onClick={handleRouteBack(router)}>Back</Button>

        <Heading>Item Form</Heading>
      </Box>

      <Grid gap={4}>
        <ControlledInput {...register("price")} label="Price" type="number" />
        <ControlledInput
          {...register("description")}
          label="Description"
          type="text"
        />
      </Grid>

      <Button onClick={handleClickNext} isDisabled={!isValid}>
        Next
      </Button>
    </Grid>
  );
};

export default ItemFormPage;
