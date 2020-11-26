export type TCarInfo = {
  Name: string;
  MainInfo: [
    { name: string; value: string },
    { name: string; value: string },
    { name: string; value: string },
    { name: string; value: string },
    { name: string; value: string },
    { name: string; value: string },
    { name: string; value: string },
    { name: string; value: string },
    { name: string; value: string },
    { name: string; value: string }
  ];
};

export type TVehicleInfo = {
  [key: string]: TCarInfo;
};

export type TInitialContext = {
  vehicles: TVehicleInfo;
};
