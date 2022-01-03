import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../../assets/img/logo.png';

const NavbarLogo = () => {
  return (
    <Link to="/" className="navbar__logo">
      <img className="navbar__logo__image" src={logo} alt="logo" />
      <h2 className="cart__title">eCeiba</h2>
    </Link>
  );
};

export default NavbarLogo;
