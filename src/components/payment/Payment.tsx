import React from 'react';
import AccountDetailsForm from '../account-details-form/AccountDetailsForm';
import PaymentSummary from './../payment-summary/PaymentSummary';
import './Payment.styles.scss';

const Payment = () => {
  return (
    <main className='payment-container'>
      <AccountDetailsForm />
      <PaymentSummary />
    </main>
  );
};

export default Payment;
