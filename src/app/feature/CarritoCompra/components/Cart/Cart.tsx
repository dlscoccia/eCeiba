import React, { useState, useEffect } from 'react';
import { Wrapper } from './Cart.styles';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ carrito }: any) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    carrito.forEach((item: any) => {
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
            carrito.map((item: any) => <CartItem key={item.id} item={item} />)
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

const mapStateToProps = (state: any) => {
  return {
    carrito: state.productos.carrito,
  };
};

export default connect(mapStateToProps)(Cart);
