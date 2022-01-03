import React from 'react';
import { Wrapper } from './SingleItem.styles';

import { connect } from 'react-redux';
import { addToCart } from '../../../../core/redux/acciones/productos/ProductosAcciones';
import { Link } from 'react-router-dom';

const SingleItem = ({ current, addToCart }: any) => {
  return (
    <Wrapper>
      <div className="content__image">
        <img
          className="content__image__image"
          src={current.image}
          alt={current.title}
        />
      </div>
      <div className="content__details">
        <p className="content__details__title">{current.title}</p>
        <p className="content__details__description">{current.description}</p>
        <p className="content__details__price">$ {current.price}</p>
        <div className="content__details__buttons">
          <Link
            to="/productos"
            className="content__details__buttons__button link"
          >
            Regresar
          </Link>
          <button
            onClick={() => addToCart(current.id)}
            className="content__details__buttons__button"
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    current: state.productos.currentItem,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (id: number) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
