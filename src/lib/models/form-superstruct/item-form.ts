import * as ss from "superstruct";

import { submissionFormRequestScheme } from "./request";

export const itemFormScheme = ss.pick(submissionFormRequestScheme, [
  "price",
  "categories",
  "description",
]);

export type ItemForm = ss.Infer<typeof itemFormScheme>;
