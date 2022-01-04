import React from 'react';
import { Link } from 'react-router-dom';
import ProductoCarrito from '../../ProductoCarrito/';
import { Producto } from '../../../../Producto/models/Producto';

type ListaCrarritoProps = {
  carrito: Producto[];
};

const ListaCarrito: React.FC<ListaCrarritoProps> = ({ carrito }) => {
  return (
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
  );
};

export default ListaCarrito;
