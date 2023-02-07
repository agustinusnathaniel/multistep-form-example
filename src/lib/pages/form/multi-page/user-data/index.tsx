import { useRouter } from "next/router";

import UserDataForm from "lib/components/form/submission/steps/UserDataForm";
import { handleRouteBack } from "lib/utils/handleRouteBack";

const UserDataFormPage = () => {
  const router = useRouter();
  const proceedToItemForm = () => router.push("/form/item");

  return (
    <UserDataForm
      onClickBack={handleRouteBack({ router })}
      onSuccessfulStore={proceedToItemForm}
    />
  );
};

export default UserDataFormPage;
