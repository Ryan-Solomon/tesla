import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Model3 from './pages/model-3/Model3';
import Nav from './components/nav/Nav';
import Specs from './components/car-specs/Specs';

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path='/'>
          <Model3 />
        </Route>
        <Route exact path='/specs'>
          <Specs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
