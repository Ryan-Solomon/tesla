import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountDetailsForm from './AccountDetailsForm';
import userEvent from '@testing-library/user-event';

test('renders welcome message', () => {
  render(<AccountDetailsForm />);
  expect(screen.getByText(/enter account details/i)).toBeInTheDocument();
});

test('show correct input after user types', () => {
  render(<AccountDetailsForm />);
  const firstNameInput = screen.getByLabelText(
    /first name/i
  ) as HTMLInputElement;
  expect(firstNameInput).toBeInTheDocument();
  userEvent.type(firstNameInput, 'ryan');
  expect(firstNameInput.value).toEqual('ryan');
});
