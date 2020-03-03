import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './queryItem.css';

class ProductItem extends Component {
  render() {
    const {
      title, thumbnail, price, id, quantity, realPrice, productInfo,
    } = this.props;
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card car-card">
            <div className="card-image">
              <img alt="Car Cover" className="car-card-image" src={thumbnail} />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
              <p>{price}</p>
            </div>
            <div className="card-action">
              <Link to={{
                pathname: `/products/${id}`,
                state: {
                  product: {
                    title, thumbnail, price, id, quantity, realPrice, productInfo,
                  },
                },
              }}
              >VER DETALHES</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

  


ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  realPrice: PropTypes.number.isRequired,
  productInfo: PropTypes.func.isRequired,
};

export default ProductItem;
