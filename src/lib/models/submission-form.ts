export type SubmissionFormRequest = {
  name: string;
  email: string;
  phoneNumber: string;

  price: number;
  age: number;
  description: string;

  categories: Array<string>;
  inviteCode: string;
};
