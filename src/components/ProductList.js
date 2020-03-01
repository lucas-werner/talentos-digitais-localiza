import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import * as productAPI from '../services/productAPI';
import './ProductList.css';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { query } = this.props;
    if (query !== prevProps.query) {
      return productAPI.getQuery(query)
        .then((products) => this.setState({ products: products.results }));
    }
    return false;
  }

  render() {
    const { products } = this.state;
    const { query } = this.props;
    if (!products) {
      return (
        <h2 className="empty_list">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      );
    }
    return (
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
    );
  }
}

ProductList.propTypes = {
  categoryId: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  totalItems: PropTypes.func.isRequired,
};

export default ProductList;
