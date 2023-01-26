import * as ss from "superstruct";

import { submissionFormRequestScheme } from "./request";

export const itemFormScheme = ss.refine(
  ss.pick(submissionFormRequestScheme, ["price", "categories", "description"]),
  "itemFormScheme",
  (val) => {
    if (!(val.description === "hello" && val.price > 10)) {
      return {
        message: "Price must be > 10 if description is hello",
        path: ["price"],
      };
    }
    return true;
  }
);

export type ItemForm = ss.Infer<typeof itemFormScheme>;
