import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

type NavbarCartProps = {
  cartCount: number;
};

const NavbarCart: React.FC<NavbarCartProps> = ({ cartCount }) => {
  return (
    <button className="navbar__cart_cart_button">
      <Link to="/carrito" role="link" className="navbar__cart_cart-link">
        <div className="navbar__cart">
          <MdShoppingCart />
          <div className="cart__counter" id="cart-total">
            {cartCount}
          </div>
        </div>
      </Link>
    </button>
  );
};

export default NavbarCart;
