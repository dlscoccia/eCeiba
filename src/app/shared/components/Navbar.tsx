import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  img {
    width: 100px;
    height: auto;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <img
        src="https://cdn.dribbble.com/users/427368/screenshots/13077072/media/7706c24e5e67a5f710c634883f2756ce.jpg?compress=1&resize=400x300"
        alt="logo"
      />
      <img
        src="https://www.creativefabrica.com/wp-content/uploads/2019/04/Shopping-cart-icon-by-marco.livolsi2014-8-580x386.jpg"
        alt="carticon"
      />
    </NavContainer>
  );
};

export default Navbar;
