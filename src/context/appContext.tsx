import React, { FC, ReactNode, useContext, useState } from 'react';
import { TInitialContext } from '../types/types';
import { vehicleInfo } from './../data/VehicleInfo';

const initialContext: TInitialContext = {
  vehicles: vehicleInfo,
};

export const AppContext = React.createContext<TInitialContext>(initialContext);

export const AppProvider: FC<ReactNode> = ({ children }) => {
  const [vehicles, setVehicles] = useState(vehicleInfo);

  return (
    <AppContext.Provider
      value={{
        vehicles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
