import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { titleAnimation } from '../../animations/animations';
import CarInfoComponent from '../car-info-component/CarInfoComponent';
import './LandingHero.styles.scss';

type Props = {
  title: string;
  backgroundUrl: string;
};

const LandingHero: FC<Props> = ({ title, backgroundUrl }) => {
  const backgroundStyles = {
    background: `linear-Gradient(
      to bottom,
     
      rgba(0, 0, 0, 0.844),
       rgba(67, 67, 67, 0.52)
    ),
    url(${backgroundUrl}) center center / cover no-repeat`,
  };

  return (
    <div style={backgroundStyles} className='model-3-top-container'>
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
      {title === 'TESLA' ? null : <CarInfoComponent />}
    </div>
  );
};

export default LandingHero;
