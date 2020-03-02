import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header'
import Logo from '../imgs/werner.png'
import ProductList from '../components/CarList';
import * as productAPI from '../services/productAPI';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './home.css';

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="https://seminovos.localiza.com/"><img src={Logo} alt="werner-seminovos-logo" className="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
            <a href="https://github.com/lucas-werner" title="GitHub">

<svg class="socialSVG" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 30 30">
    <path fill="#396fb4" id="git-hub" class="socialLogo"
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
</svg>
</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">LINKEDIN</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
            </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
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
