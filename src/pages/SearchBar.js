import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ProductList from '../components/ProductList';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',    
         
    };

    this.createInputSearch = this.createInputSearch.bind(this);    
    this.onSearchTextChange = this.onSearchTextChange.bind(this);  
    this.onChangeRedirect = this.onChangeRedirect.bind(this);

  }

  onChangeRedirect() {
    this.setState({
      isShouldRedirect: true,
    });
  }

  onSearchTextChange(e) {
    if (e.keyCode === 13) {     
      this.setState({ query: e.target.value });
      e.target.value = '';
    }
  }  

  createInputSearch() {    
    return (
      <div className="header">
        <label htmlFor="text">
          <input
            id="text"
            type="text"            
            onKeyUp={this.onSearchTextChange}
            className="input-search"
          />
        </label>       
      </div>
    );
  }  

  render() {
    const { query } = this.state;
    return (
      <div className="main_page">
        {this.createInputSearch()}
        <div className="main_content">          
          <div className="productList">
            <ProductList  
             
              query={query}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
