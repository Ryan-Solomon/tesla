import React from 'react';
import CarInfoComponent from '../car-info-component/CarInfoComponent';
import './Interior.styles.scss';

const Interior = () => {
  return (
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            molestiae eum aut. Ipsum animi, quasi consequuntur est repellat
            illum accusantium, maiores quaerat, natus corporis tenetur? Itaque
            natus saepe, aperiam debitis voluptatibus doloribus vitae pariatur
            iste nostrum error soluta optio eaque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interior;
