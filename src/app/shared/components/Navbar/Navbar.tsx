import React, { useState, useEffect } from 'react';
import { Wrapper } from './Navbar.styles';
import { connect } from 'react-redux';
import { Producto } from '../../../feature/Producto/models/Producto';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import NavbarCart from './NavbarCart';
import NavbarLogo from './NavbarLogo';

type CartProps = {
  carrito: Producto[];
};

const Navbar = ({ carrito }: CartProps) => {
  const [cartCount, setCartCount] = useState(0);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    const windowScrolled = 150;
    if (window.scrollY >= windowScrolled) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    let count = 0;
    carrito.forEach((item: Producto) => {
      count += item.qty;
    });

    setCartCount(count);

    window.addEventListener('scroll', changeNav);
  }, [carrito, cartCount]);

  return (
    <Wrapper>
      <nav
        className="navbar"
        style={{ background: scrollNav ? '#ffffff' : '#ffffff90' }}
      >
        <NavbarLogo />
        <NavbarCart cartCount={cartCount} />
      </nav>
    </Wrapper>
  );
};

const mapStateToProps = (state: EstadoGeneral) => {
  return {
    carrito: state.productos.carrito,
  };
};

export default connect(mapStateToProps)(Navbar);
