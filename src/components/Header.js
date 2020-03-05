import React from 'react';
import Logo from '../images/werner.png'
import GitHub from '../images/git-hub.svg'
import LinkedIn from '../images/linkedin.svg'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Header(props) {
  const { handleChange, handleSubmit } = props;
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
 
        <form onSubmit={e => handleSubmit(e)} class="form-inline my-2 my-lg-0 search-bar">
          <input className="form-control input-car" type="search" placeholder="Procura outro modelo?" aria-label="Pesquisar" onChange={e => handleChange(e)} />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
        </form>
       
      </div>
    </nav>
  )
}

export default Header;
