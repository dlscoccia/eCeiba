import React from 'react';
import TarjetaProducto from './TarjetaProducto';
import data from '../../core/api/productos.json';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
`;

const GrillaProductos: React.FC = () => {
  return (
    <Container>
      {data.map((bonsai) => (
        <TarjetaProducto
          nombre={bonsai.nombre}
          id={bonsai.id}
          precio={bonsai.precio}
          imagen={bonsai.imagen}
          edad={bonsai.edad}
          especie={bonsai.especie}
          key={bonsai.id}
        />
      ))}
    </Container>
  );
};

export default GrillaProductos;
