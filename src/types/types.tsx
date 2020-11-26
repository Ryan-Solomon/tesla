export type TCarInfo = {
  Battery: string;
  Weight: string;
  Acceleration: string;
  Range: string;
  Drive: string;
  Seating: string;
  Wheels: string;
  Cargo: string;
  Displays: string;
};

export type TVehicleInfo = {
  [key: string]: TCarInfo;
};

export type TInitialContext = {
  vehicles: TVehicleInfo;
};
