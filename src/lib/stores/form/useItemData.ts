import type { CreateToastFnReturn } from "@chakra-ui/react";
import type { NextRouter } from "next/router";
import * as React from "react";

import type { ItemForm } from "lib/models/form/item-form";
import { itemFormScheme } from "lib/models/form/item-form";

import { useSubmissionFormStore } from "./index";
import { showValidationWarning } from "./showValidationWarning";
import { useUserDataListener } from "./useUserData";

export const useItemData = () => {
  const form = useSubmissionFormStore((state) => state.form);
  const storedItemData: ItemForm = React.useMemo(
    () => ({
      price: form.price,
      description: form.description,
      categories: form.categories,
    }),
    [form]
  );
  const isItemDataValid = React.useMemo(
    () => !!itemFormScheme.safeParse(storedItemData).success,
    [storedItemData]
  );

  return { storedItemData, isItemDataValid };
};

type UseUserDataListenerDeps = {
  router: NextRouter;
  toast: CreateToastFnReturn;
};

export const useItemDataListener = ({
  router,
  toast,
}: UseUserDataListenerDeps) => {
  const { isItemDataValid } = useItemData();

  React.useEffect(() => {
    if (!isItemDataValid) {
      router.replace("/form/item").then(() => {
        showValidationWarning(toast);
      });
    }
  }, [isItemDataValid, router, toast]);

  useUserDataListener({ router, toast });
};
