import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './QueryItem';
import './queryList.css';

class ProductList extends Component {
  
  render() {
    const { query, products } = this.props;    
    return (
      <div>
        <br></br>
        <h3 style={{ textAlign: 'center' }}>Carros anunciados no Mercado Livre</h3>
        <hr></hr>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem            
            title={product.title}
            thumbnail={product.thumbnail}
            price={new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format(product.price)}
            id={product.id}
            realPrice={product.price}
            quantity={1}
            productInfo={{ query }}
            key={product.id}
            />
            ))}
      </div>
            </div>
    );
  }
}

ProductList.propTypes = {
  categoryId: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  totalItems: PropTypes.func.isRequired,
};

export default ProductList;
