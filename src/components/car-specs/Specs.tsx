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
      <div className='hero-image'></div>
      <div className='specs-info'>
        <div className='specs-title'>
          <h1>{Name} Specs</h1>
        </div>
        <div className='two-column-specs'>
          {MainInfo.map((item) => {
            return (
              <div key={item.name} className='item-info'>
                <div className='title-line'></div>
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

export default Specs;
