import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../../../assets/img/logo.png';
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
      <Link to="/" className={styles.navbar__logo}>
        <img className={styles.navbar__logo__image} src={logo} alt="logo" />
        <h2 className={styles.cart__title}>eCeiba</h2>
      </Link>
      <button className={styles.navbar__cart_cart_button}>
        <Link to="/cart" role="link" className="navbar__cart_cart-link">
          <div className={styles.navbar__cart}>
            <img
              className={styles.cart__image}
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cart-ecommerce-flatart-icons-outline-flatarticons.png"
              alt="shopping cart"
            />
            <div className={styles.cart__counter} id="cart-total">
              {cartCount}
            </div>
          </div>
        </Link>
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
