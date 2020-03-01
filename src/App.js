import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import SearchBar from './pages/SearchBar';
import './App.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route path="/products/:id" component={ProductDetails} />         
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
