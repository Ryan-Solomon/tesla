import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Model3 from './pages/model-3/Model3';
import Nav from './components/nav/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Model3 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
