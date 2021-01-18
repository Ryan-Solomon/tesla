import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import Specs from './Specs';
import { MemoryRouter, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { AppProvider, AppContext } from '../../context/appContext';
import { TCarInfo } from '../../types/types';

const mockVehicleInfo: TCarInfo = {
  Name: 'Model S',
  Image: 'string',
  Price: 1,
  MainInfo: [
    { name: 'string', value: 'string' },
    { name: 'string', value: 'string' },
    { name: 'string', value: 'string' },
    { name: 'string', value: 'string' },
    { name: 'string', value: 'string' },
    { name: 'string', value: 'string' },
    { name: 'string', value: 'string' },
    { name: 'string', value: 'string' },
    { name: 'string', value: 'string' },
    { name: 'string', value: 'string' },
  ],
};

const customRender = (ui: any, { providerProps, ...renderOptions }: any) => {
  return render(
    <AppContext.Provider {...providerProps}>{ui}</AppContext.Provider>,
    renderOptions
  );
};

test('NameConsumer shows value from provider', () => {
  const providerProps = {
    value: {
      vehicles: [mockVehicleInfo],
    },
  };
  customRender(<Specs />, { providerProps });
  expect(screen.getByText(/^My Name Is:/)).toHaveTextContent(
    'My Name Is: C3P0'
  );
});
