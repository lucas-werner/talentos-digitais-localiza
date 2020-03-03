import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products/:id" component={QueryDetails} />
          <Route exact path="/movies/new" component={NewCar} />
          <Route exact path="/movies/:id/edit" component={EditCar} />
          <Route exact path="/movies/:id" component={CarDetails} />         
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
