import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  .content__image,
  .content__details {
    width: 40%;
  }

  .content__image {
    &__image {
      width: 100%;
    }
  }

  .content__details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-around;
    font-family: var(--text-font);

    &__title {
      font-size: 32px;
    }

    &__price {
      font-weight: bold;
      font-size: 20px;
    }

    &__buttons {
      display: flex;
      gap: 10px;

      &__button {
        width: 40%;
        text-decoration: none;
        color: var(--dark-color);
        text-align: center;
        background: transparent;
        font-family: var(--text-font);
        font-weight: bold;
        font-size: 18px;
        border: solid 2px var(--dark-color);
        padding: 10px 20px;

        &:hover {
          box-shadow: -2px -2px 2px rgba(0, 0, 0, 0.8),
            2px 2px 2px rgba(0, 0, 0, 0.8);
        }
      }

      .link {
        background: var(--dark-color);
        color: var(--light-color);
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .content__image,
    .content__details {
      width: 60%;
    }
    .content__details {
      text-align: center;

      &__buttons {
        flex-direction: column;

        &__button {
          width: 100%;
        }
      }
    }
  }
`;
