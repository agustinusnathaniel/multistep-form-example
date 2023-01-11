import type { StepFormWrapperProps } from "lib/components/form/submission/StepFormWrapper";
import StepFormWrapper from "lib/components/form/submission/StepFormWrapper";
import ControlledInput from "lib/components/shared/form/ControlledInput";
import type { UseUserDataFormParams } from "lib/hooks/form/useUserDataForm";
import { useUserDataForm } from "lib/hooks/form/useUserDataForm";

type UserDataFormProps = UseUserDataFormParams &
  Pick<StepFormWrapperProps, "onClickBack">;

const UserDataForm = ({
  onSuccessfulStore,
  onClickBack,
}: UserDataFormProps) => {
  const { register, handleClickNext, errors } = useUserDataForm({
    onSuccessfulStore,
  });

  return (
    <StepFormWrapper
      heading="User Data"
      onClickBack={onClickBack}
      onClickNext={handleClickNext}
    >
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
    </StepFormWrapper>
  );
};

export default UserDataForm;
