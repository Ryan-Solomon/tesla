import React from 'react';
import './PaymentSummary.styles.scss';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';

const PaymentSummary = () => {
  // Grab vehicle info from store
  // Use useRouteMatch to get what vehicle you're ordering
  const { car } = useParams<{ car: string }>();
  const { vehicles } = useAppContext();
  const currVehicle = vehicles[car];

  return <div>{currVehicle.Name}</div>;
};

export default PaymentSummary;
