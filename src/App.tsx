import React from 'react';
import './App.scss';
import { useLocation, Route, Switch } from 'react-router-dom';
import Model3 from './pages/model-3/Model3';
import Nav from './components/nav/Nav';
import PaymentPage from './pages/payment/PaymentPage';
import Home from './pages/home/Home';
import CyberTruck from './pages/cybertruck/CyberTruck';
import Roadster from './pages/roadster/Roadster';
import ModelY from './pages/model-y/ModelY';
import ModelX from './pages/model-x/ModelX';
import ModelS from './pages/model-s/ModelS';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/model3'>
            <Model3 />
          </Route>
          <Route exact path='/modelS'>
            <ModelS />
          </Route>
          <Route exact path='/modelX'>
            <ModelX />
          </Route>
          <Route exact path='/modelY'>
            <ModelY />
          </Route>
          <Route exact path='/roadster'>
            <Roadster />
          </Route>
          <Route exact path='/cybertruck'>
            <CyberTruck />
          </Route>
          <Route exact path='/payment/:car'>
            <PaymentPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
