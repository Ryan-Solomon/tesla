import React from 'react';
import './AccountDetailsForm.styles.scss';

const AccountDetailsForm = () => {
  return (
    <section className='account-details-form'>
      <h2>Enter Account Details</h2>
      <form>
        <section className='first-name form-section'>
          <label htmlFor='first-name'>First Name</label>
          <input required type='text' id='first-name' autoFocus />
        </section>
        <section className='last-name form-section'>
          <label htmlFor='last-name'>Last Name</label>
          <input required type='text ' id='last-name' />
        </section>
        <section className='email form-section'>
          <label htmlFor='email'>Email Address</label>
          <input required type='email' id='email' />
        </section>
        <section className='phone form-section'>
          <label htmlFor='phone'>Phone Number</label>
          <input required type='tel' id='phone' />
        </section>
      </form>
      <p>
        By entering my account details above, I agree to be contacted about
        Tesla products, including through automated calls or texts. This is not
        a condition of purchase.
      </p>
    </section>
  );
};

export default AccountDetailsForm;
