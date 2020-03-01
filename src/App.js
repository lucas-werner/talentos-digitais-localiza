import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import NotFound from './pages/NotFound';
import ProductDetails from './pages/CarDetails';
import SearchBar from './pages/Home';
import './App.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products/:id" component={CarDetails} />         
          {/* <Route path='*' component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
