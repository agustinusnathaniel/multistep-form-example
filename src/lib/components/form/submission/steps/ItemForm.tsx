import type { StepFormWrapperProps } from "lib/components/form/submission/StepFormWrapper";
import StepFormWrapper from "lib/components/form/submission/StepFormWrapper";
import ControlledInput from "lib/components/shared/form/ControlledInput";
import type { UseItemFormParams } from "lib/hooks/form/useItemForm";
import { useItemForm } from "lib/hooks/form/useItemForm";

type ItemFormProps = UseItemFormParams &
  Pick<StepFormWrapperProps, "onClickBack">;

const ItemForm = ({ onSuccessfulStore, onClickBack }: ItemFormProps) => {
  const { register, handleClickNext, errors } = useItemForm({
    onSuccessfulStore,
  });

  return (
    <StepFormWrapper
      heading="Item Form"
      onClickBack={onClickBack}
      onClickNext={handleClickNext}
    >
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
    </StepFormWrapper>
  );
};

export default ItemForm;
