import React from 'react';
import { render, screen } from '@testing-library/react';
import CarInfoComponent from './CarInfoComponent';
import { MemoryRouter } from 'react-router-dom';

test('renders welcome message', () => {
  render(<CarInfoComponent />, { wrapper: MemoryRouter });
  expect(screen.getByText(/order now/i)).toBeInTheDocument();
});
