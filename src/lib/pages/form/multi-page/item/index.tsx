import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

import ItemForm from "lib/components/form/submission/steps/ItemForm";
import { useUserDataListener } from "lib/stores/form/useUserData";
import { handleRouteBack } from "lib/utils/handleRouteBack";

const ItemFormPage = () => {
  const router = useRouter();
  const toast = useToast();

  const onSuccessfulStore = () => router.push("/form/confirmation");

  useUserDataListener({ router, toast });

  return (
    <ItemForm
      onSuccessfulStore={onSuccessfulStore}
      onClickBack={handleRouteBack(router)}
    />
  );
};

export default ItemFormPage;
