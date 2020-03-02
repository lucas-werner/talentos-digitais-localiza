import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import NotFound from './pages/NotFound';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import './App.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products/:id" component={CarDetails} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />         
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
