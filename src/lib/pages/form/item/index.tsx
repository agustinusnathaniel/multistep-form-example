import { Box, Button, Grid, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

import ControlledInput from "lib/components/shared/form/ControlledInput";
import { handleRouteBack } from "lib/utils/handleRouteBack";

import { useItemForm } from "./hook";

const ItemFormPage = () => {
  const router = useRouter();
  const { register, handleClickNext, errors } = useItemForm();

  return (
    <Grid gap={6}>
      <Box>
        <Button onClick={handleRouteBack(router)}>Back</Button>

        <Heading>Item Form</Heading>
      </Box>

      <Grid gap={4}>
        <ControlledInput
          {...register("price", {
            valueAsNumber: true,
          })}
          label="Price"
          type="number"
          placeholder="item price"
          errorText={errors.price?.message}
        />
        <ControlledInput
          {...register("description")}
          label="Description"
          type="text"
          placeholder="some description"
        />
      </Grid>

      <Button onClick={handleClickNext}>Next</Button>
    </Grid>
  );
};

export default ItemFormPage;
