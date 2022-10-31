import {
  Box,
  Button,
  Grid,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import type { SubmissionFormRequest } from "lib/models/form/request";
import { handleRouteBack } from "lib/utils/handleRouteBack";

import { useConfirmation } from "./hook";

const FormConfirmationPage = () => {
  const router = useRouter();
  const { form, handleClickNext } = useConfirmation();

  return (
    <Grid gap={6}>
      <Box>
        <Button onClick={handleRouteBack(router)}>Back</Button>

        <Heading>Confirmation</Heading>
      </Box>

      <Grid gap={4}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Desc</Th>
                <Th>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              {form
                ? Object.keys(form).map((field) => (
                    <Tr key={field}>
                      <Td textTransform="capitalize">{field}</Td>
                      <Td>
                        {form[field as keyof SubmissionFormRequest] ?? ""}
                      </Td>
                    </Tr>
                  ))
                : null}
            </Tbody>
          </Table>
        </TableContainer>
      </Grid>

      <Button onClick={handleClickNext}>Next</Button>
    </Grid>
  );
};

export default FormConfirmationPage;
