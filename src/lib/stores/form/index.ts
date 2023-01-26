import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type { SubmissionFormRequest } from "lib/models/form-superstruct/request";

type SubmissionFormState = {
  form: SubmissionFormRequest;
};

const INITIAL_DATA: SubmissionFormState = {
  form: {
    name: "",
    email: "",
    age: 21,
    phoneNumber: "",

    price: 0,
    description: "",
    categories: [],

    inviteCode: "",
  },
};

type SubmissionFormAction = {
  updateForm: (obj: Partial<SubmissionFormRequest>) => void;
  resetForm: () => void;
};

type SubmissionFormStore = SubmissionFormState & SubmissionFormAction;

export const useSubmissionFormStore = create(
  persist(
    immer<SubmissionFormStore>((set) => ({
      ...INITIAL_DATA,
      updateForm: (obj) =>
        set((state) => ({ form: { ...state.form, ...obj } })),
      resetForm: () => set(INITIAL_DATA),
    })),
    {
      // btoa("submission-form")
      name: "c3VibWlzc2lvbi1mb3Jt",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
