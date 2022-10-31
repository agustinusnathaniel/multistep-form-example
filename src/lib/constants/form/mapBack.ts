type MapFormStep = Map<
  number,
  {
    back: string;
  }
>;

export const mapFormStep: MapFormStep = new Map([
  [
    1,
    {
      back: "/",
    },
  ],
  [
    2,
    {
      back: "/form/user-data",
    },
  ],
  [
    3,
    {
      back: "/form/confirmation",
    },
  ],
]);
