import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #285238;
  color: #fff;
  font-size: 12px;
`;

const Footer = () => {
  return (
    <Container>
      <p>Todos los derechos reservados</p>
    </Container>
  );
};

export default Footer;
