import { motion } from 'framer-motion';
import React from 'react';
import { titleAnimation } from '../../animations/animations';
import CarInfoComponent from '../car-info-component/CarInfoComponent';
import './LandingHero.styles.scss';

const LandingHero = () => {
  return (
    <div className='model-3-top-container'>
      <header>
        <motion.h1
          variants={titleAnimation}
          initial='hidden'
          animate='show'
          className='car-title'
        >
          Model 3
        </motion.h1>
      </header>
      <CarInfoComponent />
    </div>
  );
};

export default LandingHero;
