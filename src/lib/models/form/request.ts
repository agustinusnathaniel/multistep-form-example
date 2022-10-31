import { z } from "zod";

export const submissionFormRequestScheme = z.object({
  name: z
    .string({ required_error: "Name must be filled" })
    .min(1, { message: "Name must be filled" }),
  email: z.string().email(),
  phoneNumber: z.string().regex(/^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g, {
    message: "Please enter valid phone number",
  }),
  age: z
    .number({
      required_error: "Age must be filled",
      invalid_type_error: "Age must be filled",
    })
    .min(1, { message: "Minimum 1" })
    .max(99, { message: "Maximum 99" }),

  price: z.number({ invalid_type_error: "Price must be filled" }).min(0),
  description: z.string(),
  categories: z.array(z.string()),

  inviteCode: z.string().optional(),
});

export type SubmissionFormRequest = z.infer<typeof submissionFormRequestScheme>;
