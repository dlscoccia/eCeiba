import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './Navbar.styles';
import logo from '../../../../assets/img/logo.png';
import { connect } from 'react-redux';
import { Producto } from '../../../feature/Producto/models/Producto';

type CartProps = {
  cart: [];
};

const Navbar = ({ cart }: CartProps) => {
  const [cartCount, setCartCount] = useState(0);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 150) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    let count = 0;
    cart.forEach((item: Producto) => {
      count += item.qty;
    });

    setCartCount(count);

    window.addEventListener('scroll', changeNav);
  }, [cart, cartCount]);

  return (
    <Wrapper>
      <div
        className="navbar"
        style={{ background: scrollNav ? 'var(--light-color)' : '#ffffff90' }}
      >
        <Link to="/" className="navbar__logo">
          <img className="navbar__logo__image" src={logo} alt="logo" />
          <h2 className="cart__title">eCeiba</h2>
        </Link>
        <button className="navbar__cart_cart_button">
          <Link to="/carrito" role="link" className="navbar__cart_cart-link">
            <div className="navbar__cart">
              <img
                className="cart__image"
                src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cart-ecommerce-flatart-icons-outline-flatarticons.png"
                alt="shopping cart"
              />
              <div className="cart__counter" id="cart-total">
                {cartCount}
              </div>
            </div>
          </Link>
        </button>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cart: state.productos.carrito,
  };
};

export default connect(mapStateToProps)(Navbar);
