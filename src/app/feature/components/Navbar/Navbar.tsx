import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

import { connect } from 'react-redux';
import { ProductType } from '../../../core/redux/Shopping/shopping-reducer';

type CartProps = {
  cart: [];
};

const Navbar = ({ cart }: CartProps) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item: ProductType) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img
          className={styles.navbar__logo}
          src="https://o.remove.bg/downloads/fcb753ce-f566-4344-bbcc-8b1aa37dff90/chirnjrtb1sua07xbfgt-removebg-preview.png"
          alt="logo"
        />
        <h2 className={styles.cart__title}>eCeiba</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <img
            className={styles.cart__image}
            src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cart-ecommerce-flatart-icons-outline-flatarticons.png"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
