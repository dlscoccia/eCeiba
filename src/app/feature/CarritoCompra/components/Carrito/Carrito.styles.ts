import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  padding: 100px 20px 20px 20px;

  .cart {
    margin: 2rem auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .cart__items {
    flex: 0.7;
    margin-right: 1rem;

    .items__empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }

    .items__backBtn {
      text-decoration: none;
      color: var(--dark--color);
      font-size: 20px;
      padding: 10px 20px;
      border: 2px solid var(--dark-color);

      &:hover {
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6),
          -2px -2px 2px rgba(0, 0, 0, 0.6);
      }
    }
  }

  .cart__summary {
    height: 250px;
    flex: 0.3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    font-family: var(--text-font);
  }

  .summary__title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .summary__shipping {
    color: var(--primary-color);
  }

  .summary__price {
    display: flex;
    align-items: center;
  }

  .summary__price span:nth-child(1) {
    font-size: 0.9rem;
    flex: 0.6;
  }

  .summary__price span:nth-child(2) {
    flex: 0.4;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .summary__checkoutBtn {
    padding: 10px 20px;
    border: 2px solid var(--secondary-color);
    background: var(--dark-color);
    cursor: pointer;
    text-decoration: none;
    text-align: center;

    .checkoutBtn__button {
      font-size: 1rem;
      font-weight: bold;
      color: var(--light-color);
      background: transparent;
      border: none;
      outline: none;
      font-family: var(--text-font);
    }
  }

  .summary__checkoutBtn:visited {
    text-decoration: none;
  }
  .summary__checkoutBtn:focus {
    outline: none;
    border: 1px solid var(--secondary-color);
  }

  .summary__checkoutBtn:hover {
    opacity: 0.75;
  }

  @media (max-width: 768px) {
    .cart {
      flex-direction: column;
      .cart__summary,
      .cart__items {
        width: 100%;
      }
      .cart__summary {
        gap: 1rem;
        margin-top: 2rem;
      }
    }
  }
`;
