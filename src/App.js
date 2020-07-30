import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import NotFound from './pages/NotFound';
import NewCar from './pages/NewCar';
import QueryDetails from './pages/QueryDetails';
import EditCar from './pages/EditCar';
import './App.css';

function App() {
  return (
    <main>
      <Router basename='/talentos-digitais-localiza'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products/:id" component={QueryDetails} />
          <Route exact path="/cars/new" component={NewCar} />
          <Route exact path="/cars/:id/edit" component={EditCar} />
          <Route exact path="/cars/:id" component={CarDetails} />         
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
