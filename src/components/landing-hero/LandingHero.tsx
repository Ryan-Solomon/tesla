import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { titleAnimation } from '../../animations/animations';
import CarInfoComponent from '../car-info-component/CarInfoComponent';
import './LandingHero.styles.scss';

type Props = {
  title: string;
};

const LandingHero: FC<Props> = ({ title }) => {
  return (
    <div className='model-3-top-container'>
      <header>
        <motion.h1
          variants={titleAnimation}
          initial='hidden'
          animate='show'
          className='car-title'
        >
          {title}
        </motion.h1>
      </header>
      <CarInfoComponent />
    </div>
  );
};

export default LandingHero;
