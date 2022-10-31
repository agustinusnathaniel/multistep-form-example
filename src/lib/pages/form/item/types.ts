import type { SubmissionFormRequest } from "lib/models/submission-form";

export type ItemForm = Pick<
  SubmissionFormRequest,
  "price" | "categories" | "description"
>;
