import React, { Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './ProductoTarjeta.styles';

// Redux
import { connect } from 'react-redux';
import {
  cargarProducto,
  agregarProducto,
} from '../../../../core/redux/acciones/productos/ProductosAcciones';
import { Producto } from '../../models/Producto';
import { Action } from 'redux';

const ProductoTarjeta = ({
  producto,
  agregarProductoCarrito,
  cargarProductoCarrito,
}: any) => {
  return (
    <Wrapper>
      <div className="product">
        <img
          className="product__image"
          src={producto.image}
          alt={producto.title}
        />

        <div className="product__details">
          <p className="details__title">{producto.title}</p>
          <p className="details__desc">{producto.description}</p>
          <p className="details__price">$ {producto.price}</p>
        </div>

        <div className="product__buttons">
          <Link to={`/producto/${producto.id}`}>
            <button
              onClick={() => cargarProductoCarrito(producto)}
              className="buttons__btn buttons__view"
            >
              Ver Bonsai
            </button>
          </Link>
          <button
            onClick={() => agregarProductoCarrito(producto.id)}
            className="buttons__btn buttons__add"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    agregarProductoCarrito: (id: number) => dispatch(agregarProducto(id)),
    cargarProductoCarrito: (item: Producto) => dispatch(cargarProducto(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductoTarjeta);
