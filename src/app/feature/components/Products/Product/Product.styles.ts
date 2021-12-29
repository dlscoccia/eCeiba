import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 50px 0;
  transition: transform 0.5s ease;
  background: #fff;
  border-radius: 20px 0px 20px 0px;

  &:hover {
    transform: scale(1.15);
    transition: transform 0.5s ease;
  }
  .product {
    width: 900px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 20px 0px 20px 0px;
    border: 3px solid var(--light-color);
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  .product__image {
    width: 250px;
    object-fit: contain;
    border-radius: 20px 0 0 0px;
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
`;
