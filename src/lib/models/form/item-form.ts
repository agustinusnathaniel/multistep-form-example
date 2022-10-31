import type { z } from "zod";

import { submissionFormRequestScheme } from "lib/models/form/request";

export const itemFormScheme = submissionFormRequestScheme.pick({
  price: true,
  categories: true,
  description: true,
});

export type ItemForm = z.infer<typeof itemFormScheme>;
