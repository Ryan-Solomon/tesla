import React from 'react';
import './AccountDetailsForm.styles.scss';

const AccountDetailsForm = () => {
  return (
    <section className='account-details-form'>
      <h2>Enter Account Details</h2>
      <form>
        <section className='first-name form-section'>
          <label htmlFor='first-name'>First Name</label>
          <input type='text' id='first-name' autoFocus />
        </section>
        <section className='last-name form-section'>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text ' id='last-name' />
        </section>
        <section className='email form-section'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' id='email' />
        </section>
        <section className='phone form-section'>
          <label htmlFor='phone'>Phone Number</label>
          <input type='tel' id='phone' />
        </section>
      </form>
    </section>
  );
};

export default AccountDetailsForm;
