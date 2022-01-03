import styled from 'styled-components';

export const Wrapper = styled.div`
  .cartItem {
    margin-bottom: 1rem;
    display: flex;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  .cartItem__image {
    width: 30%;
    object-fit: contain;
  }

  .cartItem__summary {
    width: 100%;

    &__details {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: var(--secondary-color);
      font-family: var(--text-font);

      &__title {
        font-size: 1rem;
        font-weight: bold;
      }
      &__price {
        font-size: 1rem;
        font-weight: bold;
      }
    }

    &__actions {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0.6rem;

      input {
        padding: 10px;
        margin-left: 0.4rem;
        width: 60px;
        outline: none;
        border: none;
        font-size: 18px;
        font-weight: bold;
        border-bottom: 2px solid var(--dark-color);
      }
    }
  }
  .actions__deleteItemBtn {
    width: 50px;
    height: 50px;
    border: 1px solid var(--secondary-color);
    border-radius: 50%;
    cursor: pointer;
    transition: all ease-in-out 0.7s;
    outline: none;
  }

  .actions__deleteItemBtn:hover {
    transform: scale(1.2) rotate(360deg);
    background-color: rgb(209, 15, 15);
  }

  .actions__deleteItemBtn img {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 580px) {
    .cartItem__image {
      width: 40%;
    }
    .cartItem__summary {
      &__details {
        &__title {
          font-size: 14px;
          margin-bottom: 10px;
        }
        &__price {
          font-size: 12px;
        }
      }
      &__actions {
        text-align: center;
        input {
          font-size: 14px;
        }
      }
    }
    .actions__deleteItemBtn {
      width: 35px;
      height: 35px;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media (max-width: 460px) {
    .cartItem {
      flex-direction: column;
    }
    .cartItem__image,
    .cartItem__summary {
      width: 100%;
    }
  }
`;
