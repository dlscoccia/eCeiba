import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 100px 0;
  justify-content: center;
  align-items: center;
  .suscribe-form,
  .suscribe-image {
    width: 50%;
  }

  .suscribe-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: var(--text-font);

    .info-text {
      text-align: center;
      font-size: 24px;
      margin-bottom: 30px;
    }
    .info-text p {
      font-size: 18px;
    }
  }

  .emailInput {
    input {
      width: 100%;
      padding: 10px 20px;
      outline: none;
      border: 1px solid var(--dark-color);
      margin: 10px 0;
    }

    button {
      color: var(--dark-color);
      padding: 10px 20px;
      border: none;
      outline: none;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      border: 1px solid transparent;
      &:hover {
        opacity: 90;
        border: 1px solid var(--dark-color);
      }
    }
  }

  .suscribe-image img {
    height: 400px;
  }
`;
