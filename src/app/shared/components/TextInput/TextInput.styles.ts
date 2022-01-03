import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 20px;

  input[type='text'],
  input[type='email'] {
    width: 100%;
    padding: 12px 20px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 4px;
  }

  .message {
    color: red;
  }
`;
