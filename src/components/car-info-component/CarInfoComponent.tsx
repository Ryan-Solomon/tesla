import React from 'react';
import './CarInfoComponent.styles.scss';

const CarInfoComponent = () => {
  return (
    <section className='car-info'>
      <div className='car-statistics'>
        <h3>
          3.1<span className='seconds'>s</span>
        </h3>
        <h6>From 0-60 mph</h6>
      </div>
      <div className='car-statistics'>
        <h3>
          353<span className='miles'>mi</span>
        </h3>
        <h6>Range</h6>
      </div>
      <div className='car-statistics'>
        <h3>AWD</h3>
        <h6>Dual Motor</h6>
      </div>
      <div className='order-button'>
        <button>ORDER NOW</button>
      </div>
    </section>
  );
};

export default CarInfoComponent;
