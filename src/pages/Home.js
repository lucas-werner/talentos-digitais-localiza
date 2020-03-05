import React, { Component } from 'react';
import ProductList from '../components/queryList';
import CarList from './CarList';
import Header from '../components/Header';
import * as productAPI from '../services/queryAPI';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      isShouldRedirect: false,
      products: [],
    };   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { query } = this.state
    if (query !== '') {
      return productAPI.getQuery(query)
        .then((products) => this.setState({ isShouldRedirect: true, products: products.results }));
    }
    return false;
  }  

  render() {
    const { query, isShouldRedirect, products } = this.state;
    if (!isShouldRedirect) {
      return (
        <div className="main_page">
          <Header handleChange={this.handleChange} handleSubmit={this.handleSubmit} /> 
          <CarList />       
              </div>
      );
    }

    return (           
      <div className="main_page">
          <Header handleChange={this.handleChange} handleSubmit={this.handleSubmit} />   
          <div>
          <div className="productList">
            <ProductList
              query={query}
              products={products} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
