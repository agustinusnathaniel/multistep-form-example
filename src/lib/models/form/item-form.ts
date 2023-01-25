import type { z } from "zod";

import { submissionFormRequestScheme } from "lib/models/form/request";

export const itemFormScheme = submissionFormRequestScheme
  .pick({
    price: true,
    categories: true,
    description: true,
  })
  .refine((val) => val.description === "hello" && val.price > 10, {
    message: "Price must be > 10 if description is hello",
    path: ["price"],
  });

export type ItemForm = z.infer<typeof itemFormScheme>;
