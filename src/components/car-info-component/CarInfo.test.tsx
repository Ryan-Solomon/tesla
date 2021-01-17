import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CarInfoComponent from './CarInfoComponent';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('renders welcome message', () => {
  render(<CarInfoComponent />, { wrapper: MemoryRouter });
  expect(screen.getByText(/order now/i)).toBeInTheDocument();
});
test('direct to payments function is clicked and directs to payments', async () => {
  render(<CarInfoComponent />, { wrapper: MemoryRouter });
  const directToPayments = jest.fn();
  const orderButton = screen.getByText(/order now/i);
  orderButton.onclick = directToPayments;
  userEvent.click(orderButton);
  expect(directToPayments).toHaveBeenCalled();
});
