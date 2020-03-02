import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header'
import Logo from '../imgs/werner.png'
import GitHub from '../imgs/git-hub.svg'
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
        <a  href="https://www.instagram.com/oficial.werner/"><img src={Logo} alt="werner-seminovos-logo" className="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a href="https://github.com/lucas-werner" title="GitHub" className="social-logo nav-link">
               <img src={GitHub} alt="git-hub" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.linkedin.com/in/wernerlucas/">LINKEDIN</a>
            </li>
            <li class="nav-item dropdown">
              <p class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projetos
            </p>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="http://lucas-werner.github.io/projetos/facebook-page" target="_blank" rel="noopener noreferrer">Facebook Page</a>
                <a class="dropdown-item" href="http://lucas-werner.github.io/projetos/daily-prophet" target="_blank" rel="noopener noreferrer" >Profeta Diário</a>
                <a class="dropdown-item" href="http://lucas-werner.github.io/projetos/meme-generator" target="_blank" rel="noopener noreferrer">Meme Generator</a>
                <a class="dropdown-item" href="http://lucas-werner.github.io/projetos/pixel-art" target="_blank" rel="noopener noreferrer">Pixel Art</a>
                <a class="dropdown-item" href="http://lucas-werner.github.io/projetos/color-guess" target="_blank" rel="noopener noreferrer">Color Guess</a>
                <a class="dropdown-item" href="http://lucas-werner.github.io/projetos/to-do-list" target="_blank" rel="noopener noreferrer">To do list</a>
                <a class="dropdown-item" href="http://lucas-werner.github.io/projetos/trybe-curriculo" target="_blank" rel="noopener noreferrer">Currículo Trybe</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Disabled</a>
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
