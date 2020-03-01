import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header'
import ProductList from '../components/CarList';
import * as productAPI from '../services/productAPI';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      isShouldRedirect: false,
      products: [],

    };
    this.createNavBar = this.createNavBar.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

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
   
  createNavBar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(página atual)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Ação</a>
                <a class="dropdown-item" href="#">Outra ação</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Algo mais aqui</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Desativado</a>
            </li>
          </ul>
          <form onSubmit={this.handleSubmit} class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar" value={this.state.query} onChange={this.handleChange} />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
          </form>
        </div>
      </nav>
    )
  }

  render() {
    const { query, isShouldRedirect, products } = this.state;
    if (!isShouldRedirect) {
      return (
        <div className="main_page">
          {this.createNavBar()}
          Insira umas paradas aí.
              </div>
      );
    }
    return (
      <div className="main_page">
        {this.createNavBar()}
        Insis paradas aí.ra uma
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

export default SearchBar;
