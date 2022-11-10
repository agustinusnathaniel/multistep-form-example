import create from "zustand";
import { persist } from "zustand/middleware";

type SubmissionFormWrapperState = {
  currentStep: number;
  overrideCurrentStep?: number;
};

const INITIAL_DATA: SubmissionFormWrapperState = {
  currentStep: 1,
};

type SubmissionFormWrapperAction = {
  setCurrentStep: (currentStep: number) => void;
  setOverrideCurrentStep: (overrideCurrentStep: number) => void;
};

type SubmissionFormWrapperStore = SubmissionFormWrapperState &
  SubmissionFormWrapperAction;

export const useSubmissionFormWrapperStore = create(
  persist<SubmissionFormWrapperStore>(
    (set) => ({
      ...INITIAL_DATA,
      setCurrentStep: (currentStep) => set({ currentStep }),
      setOverrideCurrentStep: (overrideCurrentStep) =>
        set({ overrideCurrentStep }),
    }),
    {
      // btoa("submission-form-wrapper")
      name: "c3VibWlzc2lvbi1mb3JtLXdyYXBwZXI=",
      getStorage: () => sessionStorage,
    }
  )
);
