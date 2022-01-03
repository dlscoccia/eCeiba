import React, { useEffect, useState } from 'react';
import { Wrapper } from './ListarProductos.styles';
import { connect } from 'react-redux';
import ProductoTarjeta from '../ProductoTarjeta';
import FiltrosProductos from '../FiltroProductos';
import { opcionesFiltros } from '../../models/opcionesFiltros';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { Producto } from '../../models/Producto';

type ListarProductosProps = {
  productos: Producto[];
};

const ListarProductos: React.FC<ListarProductosProps> = ({ productos }) => {
  const todosProductos = productos;
  const [productosFiltrados, setListaFiltrada] = useState(productos);

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
              key={opciones.etiqueta}
              {...opciones}
              productos={productos}
              setListaFiltrada={setListaFiltrada}
            />
          ))}
        </div>
        {productosFiltrados.map((product: Producto) => (
          <ProductoTarjeta key={product.id} producto={product} />
        ))}
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: EstadoGeneral) => {
  return {
    productos: state.productos.productos,
  };
};

export default connect(mapStateToProps)(ListarProductos);
