import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 50px auto;
  transition: transform 0.5s ease;
  width: 90%;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s ease;
  }

  .product {
    background: #fff;
    width: 70%;
    margin-bottom: 1rem;
    margin: 0 auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border: 3px solid var(--light-color);
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  .product__image {
    width: 40%;
    object-fit: contain;
  }

  .product__details {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: var(--text-font);
  }

  .details__title {
    font-size: 20px;
    font-weight: bold;
    color: var(--primary-color);
  }

  .details__desc {
    font-size: 0.85rem;
    color: var(--secondary-color);
  }

  .details__price {
    font-size: 32px;
    font-weight: bold;
    font-family: var(--logo-font);
  }

  .product__buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1rem;
  }

  .buttons__btn {
    width: 100px;
    padding: 0.5rem;
    font-size: 12px;
    cursor: pointer;
    border: none;
    font-weight: bold;
  }

  .buttons__btn:hover {
    opacity: 0.9;
    box-shadow: 3px 3px 3px #00000080;
  }

  .buttons__view {
    background: transparent;
    border: 2px solid var(--dark-color);
    color: var(--dark-color);
  }

  .buttons__add {
    background: var(--dark-color);
    color: var(--light-color);
  }

  @media (max-width: 1240px) {
    .product {
      width: 80%;
    }
  }
  @media (max-width: 1024px) {
    .product {
      width: 90%;
    }
    .details__desc {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 768px) {
    .product {
      flex-direction: column;
      text-align: center;
    }
    .product__image {
      width: 80%;
      margin: 0 auto;
    }
    .product__buttons {
      flex-direction: row;
    }
  }
`;
