import React, { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import { connect } from 'react-redux';
import CartItem from './CartItem/CartItem';
import { CartItemType } from '../../../Main';
import Modal from '../Modal/Modal';
import Checkout from '../Checkout/Checkout';
type cartProps = {
  cart: CartItemType[];
};

const Cart = ({ cart }: cartProps) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const handleClick = () => {
    if (totalItems > 0) {
      return setShowModal(true);
    }
  };;

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button onClick={handleClick} className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
      {showModal && (
        <Modal onClose={handleClose}>
          <Checkout />
        </Modal>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
