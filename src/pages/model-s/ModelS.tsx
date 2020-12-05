import { motion } from 'framer-motion';
import React from 'react';
import { pageAnimation } from '../../animations/animations';
import Specs from '../../components/car-specs/Specs';
import Interior from '../../components/interior/Interior';
import LandingHero from '../../components/landing-hero/LandingHero';
import './ModelS.styles.scss';
import backgroundImage from '../../img/modelS.jpg';

const ModelS = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <LandingHero backgroundUrl={backgroundImage} title='Model S' />
      <Interior />
      <Specs />
    </motion.div>
  );
};

export default ModelS;
