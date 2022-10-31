export type SubmissionFormRequest = {
  name: string;
  email: string;
  phoneNumber: string;
  age: number;

  price: number;
  description: string;
  categories: Array<string>;

  inviteCode?: string;
};
