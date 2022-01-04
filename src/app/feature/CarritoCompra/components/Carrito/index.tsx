import React, { useState, useEffect } from 'react';
import { Wrapper } from './Carrito.styles';
import { connect } from 'react-redux';
import { Producto } from 'app/feature/Producto/models/Producto';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import ResumenCarrito from './ResumenCarrito';
import ListaCarrito from './ListaCarrito';

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
        <ListaCarrito carrito={carrito} />
        <ResumenCarrito totalPrice={totalPrice} totalItems={totalItems} />
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
