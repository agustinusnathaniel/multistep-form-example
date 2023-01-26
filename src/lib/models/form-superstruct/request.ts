import * as ss from "superstruct";

export const submissionFormRequestScheme = ss.object({
  name: ss.refine(ss.string(), "name", (val) => {
    if (val.length <= 1) {
      return { message: "Name must be filled" };
    }
    return true;
  }),
  email: ss.refine(ss.string(), "email", (email) => email.length > 10),
  phoneNumber: ss.refine(ss.string(), "phoneNumber", (val) =>
    /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g.test(val)
  ),
  age: ss.refine(ss.number(), "age", (val) => {
    if (val < 1) {
      return {
        message: "Minimum 1",
      };
    }
    if (val > 99) {
      return {
        message: "Maximum 99",
      };
    }
    return true;
  }),
  price: ss.refine(ss.number(), "price", (val) => {
    if (val < 1) {
      return "Minimum 1";
    }
    return true;
  }),
  description: ss.refine(ss.optional(ss.string()), "description", () => true),
  categories: ss.refine(ss.array(ss.string()), "categories", () => true),
  inviteCode: ss.refine(ss.optional(ss.string()), "inviteCode", () => true),
});

export type SubmissionFormRequest = {
  description?: string;
  inviteCode?: string;
  name: string;
  email: string;
  phoneNumber: string;
  age: number;
  price: number;
  categories: string[];
};
