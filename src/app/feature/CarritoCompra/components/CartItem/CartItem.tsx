import React, { useState } from 'react';
import { Wrapper } from './CartItem.styles';

import { connect } from 'react-redux';
import {
  adjustItemQty,
  removeFromCart,
} from '../../../../core/redux/acciones/productos/ProductosAcciones';

const CartItem = ({ item, adjustQty, removeFromCart }: any) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e: any) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <Wrapper>
      <div className="cartItem">
        <img className="cartItem__image" src={item.image} alt={item.title} />
        <div className="cartItem__summary">
          <div className="cartItem__summary__details">
            <p className="cartItem__summary__details__title">{item.title}</p>
            <p className="cartItem__summary__details__price">
              Precio unitario: $ {item.price}
            </p>
          </div>
          <div className="cartItem__summary__actions">
            <div className="actions__qty">
              <label htmlFor="qty">Und.</label>
              <input
                min="1"
                type="number"
                id="qty"
                name="qty"
                value={input}
                onChange={onChangeHandler}
              />
            </div>
            <button
              id="delete-button"
              onClick={() => removeFromCart(item.id)}
              className="actions__deleteItemBtn"
            >
              <img
                src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-trash-interface-kiranshastry-solid-kiranshastry.png"
                alt="trash"
              />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    adjustQty: (id: any, value: any) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id: number) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
