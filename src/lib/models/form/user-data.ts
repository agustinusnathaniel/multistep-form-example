import type { z } from "zod";

import { submissionFormRequestScheme } from "./request";

export const userDataFormScheme = submissionFormRequestScheme.pick({
  name: true,
  email: true,
  phoneNumber: true,
  age: true,
});

export type UserDataForm = z.infer<typeof userDataFormScheme>;
