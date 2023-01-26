import * as ss from "superstruct";

export const submissionFormRequestScheme = ss.object({
  name: ss.define<string>("name", (val: string) => {
    if (val.length <= 1) {
      return { message: "Name must be filled" };
    }
    return true;
  }),
  email: ss.define<string>("email", (email: string) => email.length > 0),
  phoneNumber: ss.define<string>("phoneNumber", () => true),
  age: ss.define<number>("age", () => true),
  price: ss.define<number>("price", () => true),
  description: ss.define<string | undefined>("description", () => true),
  categories: ss.define<Array<string>>("categories", () => true),
  inviteCode: ss.define<string | undefined>("inviteCode", () => true),
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
