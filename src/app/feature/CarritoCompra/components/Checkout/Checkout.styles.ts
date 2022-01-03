import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 0 50px 0;
  font-family: var(--text-font);
  display: flex;
  width: 100%;
  min-height: 95vh;
  justify-content: space-evenly;

  .form {
    display: flex;
    justify-content: space-around;
    width: 90%;

    &__inputs {
      flex: 0.4;
    }

    &__calendar {
      display: flex;
      flex: 0.4;
      flex-direction: column;

      &__button {
        font-size: 20px;
        background: var(--dark-color);
        color: var(--light-color);
        font-family: var(text--font);
        padding: 10px 20px;
      }
    }
  }

  label {
    font-size: 18px;
    display: block;
  }

  input {
    width: 100%;
  }

  input::placeholder {
    font-family: var(--text-font);
  }

  @media (max-width: 768px) {
    .form {
      flex-direction: column;
    }
  }
`;
