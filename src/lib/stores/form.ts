/* eslint-disable no-param-reassign */
import create from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type { SubmissionFormRequest } from "lib/models/submission-form";

type SubmissionFormState = {
  form: SubmissionFormRequest;
};

const INITIAL_DATA: SubmissionFormState = {
  form: {
    name: "",
    email: "",
    phoneNumber: "",

    price: 0,
    age: 0,
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
        set((state) => {
          state.form = { ...state.form, ...obj };
        }),
      resetForm: () => set(INITIAL_DATA),
    })),
    {
      // btoa("submission-form")
      name: "c3VibWlzc2lvbi1mb3Jt",
      getStorage: () => sessionStorage,
    }
  )
);
