import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import CustomerRating from '../components/CustomerRating';
import './ProductDetails.css';
import * as productAPI from '../services/productAPI';

class ProductDetails extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      attributes: [],     
      isShouldRedirect: false,
      redirectPage: '',     
    };

    this.onChangeRedirect = this.onChangeRedirect.bind(this);
  }

  componentDidMount() {
    const { product } = this.props.location.state;
    const { productInfo } = product;
    productAPI.getQuery(productInfo.query)
      .then((products) => products.results.find((item) => item.id === product.id))
      .then((response) => response.attributes.map((element) => this.setState((state) => ({
        attributes: [...state.attributes, `${element.name}: ${element.value_name}`],
      }))));
  }

  onChangeRedirect(string) {
    this.setState({
      isShouldRedirect: true,
      redirectPage: string,
    });
  }

  backButtonAndCart() {
    return (
      <div className="back_container">
        <div>
          <button
            label="return"
            type="button"
            onClick={() => this.onChangeRedirect('/')}
            className="return-button"
          />
        </div>       
      </div>
    );
  }  

  render() {
    const { product } = this.props.location.state;
    const { title, thumbnail, id} = product;
    const { attributes, isShouldRedirect, redirectPage } = this.state;
    if (isShouldRedirect) return <Redirect to={redirectPage} />;
    return (
      <div>
        {this.backButtonAndCart()} 
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img alt="Movie Cover" src={thumbnail} />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
            {attributes.map((attribute) =>
              <p className="attribute" key={attribute}>{attribute}</p>)}
            </div>
            <div className="card-action">
              <Link to={`/movies/${id}/edit`}>EDITAR</Link>
              <a href="https://seminovos.localiza.com/">VOLTAR</a>
              <button type="button" onClick={this.onChangeRedirect}>APAGAR</button>
            </div>
          </div>
        </div>
      </div>
    );


        <div>
          <CustomerRating />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.object,
    }),
  }).isRequired,
};

export default ProductDetails;
