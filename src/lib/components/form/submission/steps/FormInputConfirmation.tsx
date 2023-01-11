import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import type { StepFormWrapperProps } from "lib/components/form/submission/StepFormWrapper";
import StepFormWrapper from "lib/components/form/submission/StepFormWrapper";
import { useConfirmation } from "lib/hooks/form/useConfirmation";
import type { SubmissionFormRequest } from "lib/models/form/request";

type FormInputConfirmationProps = Pick<
  StepFormWrapperProps,
  "onClickBack" | "onClickNext"
>;

const FormInputConfirmation = ({
  onClickBack,
  onClickNext,
}: FormInputConfirmationProps) => {
  const { form } = useConfirmation();

  return (
    <StepFormWrapper
      heading="Confirmation"
      onClickBack={onClickBack}
      onClickNext={onClickNext}
    >
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
                    <Td>{form[field as keyof SubmissionFormRequest] ?? ""}</Td>
                  </Tr>
                ))
              : null}
          </Tbody>
        </Table>
      </TableContainer>
    </StepFormWrapper>
  );
};

export default FormInputConfirmation;
