import React from 'react';
import data from '../../../../core/api/db.json';
import { Wrapper } from './FiltroProductos.styles';
import { Producto } from '../../models/Producto';

type FiltroProps = {
  etiqueta: string;
  productos: Producto[];
  filtro: string;
  condicion: string;
  setListaFiltrada: React.Dispatch<any>;
};

const FiltrosProductos: React.FC<FiltroProps> = ({
  etiqueta,
  productos,
  filtro,
  condicion,
  setListaFiltrada,
}) => {
  const handleFilter = (filter: string, condition: string) => {
    if (condicion === 'menor') {
      const nuevaLista = productos.sort(
        (a: any, b: any) => a[filtro] - b[filtro]
      );
      setListaFiltrada(nuevaLista);
    } else if (condicion === 'mayor') {
      const nuevaLista = data.productos.sort(
        (a: any, b: any) => b[filtro] - a[filtro]
      );
      setListaFiltrada(nuevaLista);
    } else {
      setListaFiltrada(productos);
    }
  };
  return (
    <Wrapper>
      <button onClick={() => handleFilter(filtro, condicion)}>
        {etiqueta}
      </button>
    </Wrapper>
  );
};

export default FiltrosProductos;
