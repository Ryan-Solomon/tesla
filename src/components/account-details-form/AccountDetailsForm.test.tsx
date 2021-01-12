import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountDetailsForm from './AccountDetailsForm';

it('renders welcome message', () => {
  render(<AccountDetailsForm />);
  expect(screen.getByText(/enter account details/i)).toBeInTheDocument();
});
