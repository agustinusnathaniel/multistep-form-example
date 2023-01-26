import * as ss from "superstruct";

import { submissionFormRequestScheme } from "./request";

export const userDataFormScheme = ss.pick(submissionFormRequestScheme, [
  "name",
  "email",
  "phoneNumber",
  "age",
]);

export type UserDataForm = ss.Infer<typeof userDataFormScheme>;
