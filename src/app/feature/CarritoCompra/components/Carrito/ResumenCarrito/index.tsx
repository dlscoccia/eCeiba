import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type ResumenCarritoProps = {
  totalItems: number;
  totalPrice: number;
};

const ResumenCarrito: React.FC<ResumenCarritoProps> = ({
  totalItems,
  totalPrice,
}) => {
  const [emptyCart, setEmptyCart] = useState(true);

  useEffect(() => {
    if (totalPrice > 0) {
      setEmptyCart(false);
    } else {
      setEmptyCart(true);
    }
  }, [totalPrice]);

  return (
    <div className="cart__summary">
      <h4 className="summary__title">Resumen de tu compra</h4>
      <div className="summary__price">
        <span>TOTAL: ({totalItems} artículos)</span>
        <span>$ {totalPrice}</span>
      </div>
      <span className="summary__shipping">
        El costo del despacho no está incluido en el total.
      </span>
      <Link
        to="/checkout"
        className="summary__checkoutBtn"
        style={{ pointerEvents: emptyCart ? 'none' : 'auto' }}
      >
        <button className="checkoutBtn__button">Realizar pedido</button>
      </Link>
    </div>
  );
};

export default ResumenCarrito;
