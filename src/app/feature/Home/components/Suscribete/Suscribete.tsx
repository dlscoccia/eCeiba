import React from 'react';
import { Wrapper } from './Suscribete.styles';

const Suscribete = () => {
  return (
    <Wrapper>
      <div className="suscribe-form">
        <div className="info-text">
          <h2>Suscribete!!</h2>
          <p>Enterate de todas nuestras novedades.</p>
        </div>
        <div className="emailInput">
          <label htmlFor="email">Ingresa tu Email</label>
          <input type="email" name="email" id="email" placeholder="Email" />
          <button type="submit">Suscribirse</button>
        </div>
      </div>
      <div className="suscribe-image">
        <img
          src="https://www.vanidades.com/__export/1634777542231/sites/vanidades/img/2021/10/20/como-cuidar-un-bonsai.jpg_1998528053.jpg"
          alt="bonsai"
        />
      </div>
    </Wrapper>
  );
};

export default Suscribete;
