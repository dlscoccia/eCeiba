import React from 'react';
import styled from 'styled-components';
import FiltrosProductos from '../components/FiltrosProductos';
import GrillaProductos from './GrillaProductos';

const Container = styled.div``;

const ListaProductos = () => {
  return (
    <Container>
      <FiltrosProductos />
      <GrillaProductos />
    </Container>
  );
};

export default ListaProductos;
