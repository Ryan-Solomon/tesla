import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Model3 from './pages/model-3/Model3';
import Nav from './components/nav/Nav';
import PaymentPage from './pages/payment/PaymentPage';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Model3 />
        </Route>
        <Route exact path='/payment/:car'>
          <PaymentPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
