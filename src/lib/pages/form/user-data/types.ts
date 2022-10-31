import type { SubmissionFormRequest } from "lib/models/submission-form";

export type UserDataForm = Pick<
  SubmissionFormRequest,
  "name" | "email" | "phoneNumber" | "age"
>;
