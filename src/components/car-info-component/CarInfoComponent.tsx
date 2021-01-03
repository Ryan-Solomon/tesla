import React from 'react';
import './CarInfoComponent.styles.scss';
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom';

import { motion } from 'framer-motion';
import { fade } from './../../animations/animations';

const CarInfoComponent = () => {
  const { path } = useRouteMatch();
  const [currentPath, _] = React.useState(() => path.split('/')[1]);
  const history = useHistory();

  const directToPayments = () => {
    history.push(`/payment/${currentPath}`);
  };

  return (
    <>
      <motion.section variants={fade} className='car-info'>
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
          <button onClick={directToPayments}>ORDER NOW</button>
        </div>
      </motion.section>
    </>
  );
};

export default CarInfoComponent;
