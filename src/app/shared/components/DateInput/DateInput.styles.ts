import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 20px;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  label {
    font-size: 18px;
    margin-bottom: 10px;
  }

  input[type='date'] {
    background-color: var(--light-color);
    border: 2px solid var(--dark-color);
    width: 200px;
    padding: 15px;
    font-family: monospace;
    color: var(--dark-color);
    font-size: 18px;
    outline: none;
  }
  .message {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__price {
      font-weight: bold;
    }
  }
  .recargo {
    color: red;
    margin-left: 15px;
  }
`;
