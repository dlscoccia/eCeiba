import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 90%;

  .info {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .image img {
    width: 75%;
  }
`;

const ProductoDestacado = () => {
  return (
    <Container>
      <div className="info">
        <h2>Bonsai del mes</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
          accusantium!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Expedita, ad.
        </p>
      </div>
      <div className="image">
        <img
          src="https://www.bonsaiempire.es/great-bonsai-album/Goshin-bonsai.jpg"
          alt="bonsai"
        />
      </div>
    </Container>
  );
};

export default ProductoDestacado;
