import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #285238;
  color: #fff;
  text-align: center;
`;

const Footer = () => {
  return (
    <Container>
      <h2>Footer</h2>
    </Container>
  );
};

export default Footer;
