import React from 'react';
import './PaymentSummary.styles.scss';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';

const PaymentSummary = () => {
  const { car } = useParams<{ car: string }>();
  const { vehicles } = useAppContext();
  const currVehicle = vehicles[car];
  const { Price, Name, Image, MainInfo } = currVehicle;

  return (
    <section className='payment-summary'>
      <div className='image'>
        <img src={Image} alt={Name} />
        <h5>Estimated Delivery: 2-4 weeks</h5>
      </div>
      <div className='summary'>
        <ul>
          {MainInfo.map((item) => {
            return (
              <li key={item.name}>
                {item.name} {item.value}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='money-due'>
        <h2>Due Today: </h2>
        <h2>{Price.toLocaleString()} </h2>
      </div>
    </section>
  );
};

export default PaymentSummary;
