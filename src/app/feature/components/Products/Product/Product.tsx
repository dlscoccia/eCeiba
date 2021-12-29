import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './Product.styles';

// Redux
import { connect } from 'react-redux';
import {
  loadCurrentItem,
  addToCart,
} from '../../../../core/redux/Shopping/shopping-actions';

const Product = ({ product, addToCart, loadCurrentItem }: any) => {
  return (
    <Wrapper>
      <div className="product">
        <img
          className="product__image"
          src={product.image}
          alt={product.title}
        />

        <div className="product__details">
          <p className="details__title">{product.title}</p>
          <p className="details__desc">{product.description}</p>
          <p className="details__price">$ {product.price}</p>
        </div>

        <div className="product__buttons">
          <Link to={`/product/${product.id}`}>
            <button
              onClick={() => loadCurrentItem(product)}
              className="buttons__btn buttons__view"
            >
              Ver Bonsai
            </button>
          </Link>
          <button
            onClick={() => addToCart(product.id)}
            className="buttons__btn buttons__add"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (id: number) => dispatch(addToCart(id)),
    loadCurrentItem: (item: any) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
