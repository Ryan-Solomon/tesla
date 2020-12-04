import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animations/animations';
import LandingHero from '../../components/landing-hero/LandingHero';
import Interior from '../../components/interior/Interior';
import Specs from '../../components/car-specs/Specs';

const ModelX = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <LandingHero title='Model X' />
      <Interior />
      <Specs />
    </motion.div>
  );
};

export default ModelX;
