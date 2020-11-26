import React from 'react';
import { useAppContext } from '../../context/appContext';
import './Specs.styles.scss';

const Specs = () => {
  const {
    vehicles: { model3 },
  } = useAppContext();
  const { Name, MainInfo } = model3;

  return (
    <section className='specs-container'>
      <div className='hero-image'>
        <img src='yeet' alt='' />
      </div>
      <div className='specs-info'>
        <h1>{Name}</h1>
        <div className='two-column-specs'>
          {MainInfo.map((item) => {
            return (
              <div className='item-info'>
                <h3>{item.name}</h3>
                <h5>{item.value}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Add image to left side and create column

export default Specs;
