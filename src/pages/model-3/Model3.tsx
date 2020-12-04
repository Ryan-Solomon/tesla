import React from 'react';
import CarInfoComponent from '../../components/car-info-component/CarInfoComponent';
import './Model3.styles.scss';
import Specs from './../../components/car-specs/Specs';
import { motion } from 'framer-motion';
import { titleAnimation, pageAnimation } from './../../animations/animations';
import LandingHero from '../../components/landing-hero/LandingHero';
import Interior from '../../components/interior/Interior';

const Model3 = () => {
  return (
    <>
      <motion.div
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <LandingHero />
        <Interior />
        <Specs />
      </motion.div>
    </>
  );
};

export default Model3;
