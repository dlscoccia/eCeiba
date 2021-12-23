import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const FiltrosProductos = () => {
  return (
    <Container>
      <button>Menor edad</button>
      <button>Mayor edad</button>
      <button>Menor precio</button>
      <button>Mayor precio</button>
    </Container>
  );
};

export default FiltrosProductos;
