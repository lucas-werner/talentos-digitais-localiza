import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Logo from '../imgs/werner.png'
import GitHub from '../imgs/git-hub.svg'
import LinkedIn from '../imgs/linkedin.svg'
import ProductList from '../components/CarList';
import MovieList from './MovieList'
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
        <a href="https://lucas-werner.github.io/" target="_blank" rel="noopener noreferrer"><img src={Logo} alt="werner-seminovos-logo" className="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a href="https://github.com/lucas-werner" title="GitHub" className="social-logo nav-link" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="git-hub" />
              </a>
            </li>
            <li class="nav-item">
              <a href="https://www.linkedin.com/in/wernerlucas/" title="LinkedIn" className="social-logo nav-link" target="_blank" rel="noopener noreferrer"> <img src={LinkedIn} alt="git-hub" /></a>
            </li>
            <li class="nav-item dropdown">
              <p class="nav-link dropdown-toggle social-logo" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
          </ul>
   
          <form onSubmit={this.handleSubmit} class="form-inline my-2 my-lg-0 search-bar">
            <input className="form-control input-car" type="search" placeholder="Procura outro modelo?" aria-label="Pesquisar" value={this.state.query} onChange={this.handleChange} />
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
          <MovieList />       
              </div>
      );
    }
    return (
      <div className="main_page">
        {this.createNavBar()}
       
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
