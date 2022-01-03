import React, { useState, useEffect } from 'react';
import { Wrapper } from './Carrito.styles';
import { connect } from 'react-redux';
import ProductoCarrito from '../ProductoCarrito/';
import { Link } from 'react-router-dom';
import { Producto } from 'app/feature/Producto/models/Producto';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';

type CarritoProps = {
  carrito: Producto[];
};

const Cart: React.FC<CarritoProps> = ({ carrito }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    let items = 0;
    let price = 0;

    carrito.forEach((item: Producto) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [carrito, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <Wrapper>
      <div className="cart">
        <div className="cart__items">
          {carrito.length > 0 ? (
            carrito.map((item: Producto) => (
              <ProductoCarrito key={item.id} item={item} />
            ))
          ) : (
            <div className="items__empty">
              <h2>No tienes ningun producto agregado</h2>
              <Link to="/productos" className="items__backBtn">
                Ver productos
              </Link>
            </div>
          )}
        </div>
        <div className="cart__summary">
          <h4 className="summary__title">Resumen de tu compra</h4>
          <div className="summary__price">
            <span>TOTAL: ({totalItems} artículos)</span>
            <span>$ {totalPrice}</span>
          </div>
          <span className="summary__shipping">
            El costo del despacho no está incluido en el total.
          </span>
          <button className="summary__checkoutBtn" disabled={true}>
            <Link to="/checkout" className="checkoutBtn__button">
              Realizar pedido
            </Link>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: EstadoGeneral) => {
  return {
    carrito: state.productos.carrito,
  };
};

export default connect(mapStateToProps)(Cart);
