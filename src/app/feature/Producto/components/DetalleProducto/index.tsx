import React, { Dispatch } from 'react';
import { Wrapper } from './DetalleProducto.styles';

import { connect } from 'react-redux';
import { agregarProducto } from '../../../../core/redux/acciones/productos/ProductosAcciones';
import { Link } from 'react-router-dom';
import { Producto } from '../../models/Producto';
import { Action } from 'redux';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';

type DetalleProductoProps = {
  agregarProductoCarrito: (id: number) => void;
  current: Producto;
};

const DetalleProducto: React.FC<DetalleProductoProps> = ({
  current,
  agregarProductoCarrito,
}) => {
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
            onClick={() => agregarProductoCarrito(current.id)}
            className="content__details__buttons__button"
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: EstadoGeneral) => {
  return {
    current: state.productos.currentItem,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    agregarProductoCarrito: (id: number) => dispatch(agregarProducto(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetalleProducto);
