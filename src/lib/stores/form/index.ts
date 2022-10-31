/* eslint-disable no-param-reassign */
import create from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type { SubmissionFormRequest } from "lib/models/form/request";

type SubmissionFormState = {
  form: SubmissionFormRequest;
  currentStep: Array<number>;
  overrideCurrentStep?: number;
};

const INITIAL_DATA: SubmissionFormState = {
  form: {
    name: "",
    email: "",
    age: 0,
    phoneNumber: "",

    price: 0,
    description: "",
    categories: [],

    inviteCode: "",
  },
  currentStep: [0],
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
      getStorage: () => sessionStorage,
    }
  )
);
