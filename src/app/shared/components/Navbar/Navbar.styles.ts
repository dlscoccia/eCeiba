import styled from 'styled-components';

export const Wrapper = styled.div`
  .navbar {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 20;
    border-bottom: 2px solid var(--light-color);
  }

  .navbar__logo {
    display: flex;
    align-items: center;
  }

  .navbar__logo__image {
    width: 100px;
  }

  .navbar__cart_cart_button {
    border: none;
    outline: none;
  }

  .navbar__cart_cart-link {
    border: none;
    outline: none;
  }

  .navbar__cart {
    background: #fff;
    width: 100px;
    border: thin solid var(--dark-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
  }

  .navbar__cart:hover {
    opacity: 0.75;
  }

  .cart__title {
    font-size: 50px;
    font-weight: bold;
    color: var(--dark-color);
    font-family: var(--logo-font);
  }

  .cart__image {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }

  .cart__counter {
    height: 40px;
    width: 40px;
    border: 1px solid var(--secondary-color);
    border-radius: 50%;
    color: var(--light-color);
    background: var(--dark-color);
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    .cart__title {
      display: none;
    }
  }
`;
