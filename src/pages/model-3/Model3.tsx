import React from 'react';
import CarInfoComponent from '../../components/car-info-component/CarInfoComponent';
import './Model3.styles.scss';

const Model3 = () => {
  return (
    <>
      <div className='model-3-top-container'>
        <header>
          <h1 className='car-title'>Model 3</h1>
        </header>
        <CarInfoComponent />
      </div>
      <div className='interior-container'>
        <div className='model-3-interior-container'>
          <CarInfoComponent />
        </div>
        <div className='interior-details'>
          <div className='title-info'>
            <h4>Interior</h4>
            <h1>Built Around The Driver</h1>
            <h2>+ Learn More</h2>
          </div>
          <div className='description'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam molestiae eum aut. Ipsum animi, quasi consequuntur est
              repellat illum accusantium, maiores quaerat, natus corporis
              tenetur? Itaque natus saepe, aperiam debitis voluptatibus
              doloribus vitae pariatur iste nostrum error soluta optio eaque.
            </p>
          </div>
        </div>
      </div>
      {/* Specs Component */}
    </>
  );
};

export default Model3;
