import React from 'react';
import { render, screen } from '@testing-library/react';
import Specs from './Specs';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('renders welcome message', () => {
  render(<Specs />, { wrapper: MemoryRouter });
  expect(screen.getByText(/specs/i)).toBeInTheDocument();
});
