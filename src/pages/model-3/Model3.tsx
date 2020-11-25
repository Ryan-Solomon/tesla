import React from 'react';
import CarInfoComponent from '../../components/car-info-component/CarInfoComponent';
import './Model3.styles.scss';

const Model3 = () => {
  return (
    <div className='model-3-container'>
      <header>
        <h1 className='car-title'>Model 3</h1>
      </header>
      <CarInfoComponent />
    </div>
  );
};

export default Model3;
