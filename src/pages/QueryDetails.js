import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  Link

} from 'react-router-dom';
import './queryDetails.css';
import * as productAPI from '../services/queryAPI';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attributes: [],              
    };    
  }

  componentDidMount() {
    const {
      product
    } = this.props.location.state;
    const { productInfo } = product;
    productAPI
      .getQuery(productInfo.query)
      .then(products =>
        products.results.find(
          item =>
            item.id === product.id,
        ),
      )
      .then(response =>
        response.attributes.map(
          element =>
            this.setState(state => ({
              attributes: [
                ...state.attributes,
                `${element.name}: ${element.value_name}`,
              ],
            })),
        ),
      );
  }

  backButton() {
    return (
      <div className='back_container'>
        <div>
          <Link
            label='return'
            type='button'
            to='/'
            className='return-button'
          />
        </div>
      </div>
    );
  }

  render() {
    const { product } = this.props.location.state;
    const {
      title,
      thumbnail,
      price,     
    } = product;
    const {
      attributes,
          
    } = this.state;
  
    return (
      <div className='queryDetailsWrap'>
        {this.backButton()}
        <div className='row'>
          <div className='col s12 m7'>
            <div className='card query-card-details'>
              <div className='card-image query-details'>
                <img
                  alt='Car Cover'
                  src={thumbnail}
                />
              </div>
              <h5 className='card-title'>
                {title}
              </h5>
              <div className='card-content'>
                <ul>
                  <li>{`Preço: ${price}`}</li>
                  {attributes.map(
                    attribute => (
                      <li
                        className='attribute'
                        key={attribute}
                      >
                        {attribute}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
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
