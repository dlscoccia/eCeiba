import React, { useEffect, useState } from 'react';
import { Wrapper } from './Products.styles';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import FiltrosProductos from '../FiltroProductos/FiltrosProductos';
import { opcionesFiltros } from '../../models/opcionesFiltros';

const Products = ({ productos }: any) => {
  const todosProductos = productos;
  const [productosFiltrados, setListaFiltrada] = useState([]);

  useEffect(() => {
    setListaFiltrada(todosProductos);
  }, [todosProductos]);
  return (
    <Wrapper>
      <div className="background"></div>
      <div className="products">
        <h2>Productos Destacados</h2>
        <div className="filters">
          {opcionesFiltros.map((opciones) => (
            <FiltrosProductos
              {...opciones}
              productos={productos}
              setListaFiltrada={setListaFiltrada}
            />
          ))}
        </div>
        {productosFiltrados.map((product: any) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    productos: state.productos.productos,
  };
};

export default connect(mapStateToProps)(Products);
