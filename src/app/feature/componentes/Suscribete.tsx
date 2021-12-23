import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .info {
    text-align: center;
  }
`;

const Suscribete = () => {
  return (
    <Container>
      <div className="info">
        <h2>Suscribete!!</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="emailInput">
        <label htmlFor="email">Email</label>
        <input type="email" />
      </div>
    </Container>
  );
};

export default Suscribete;
