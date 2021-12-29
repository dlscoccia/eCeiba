import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  h2 {
    font-family: var(--logo-font);
    font-size: 90px;
    margin: 30px 0;
    text-align: center;
    color: var(--light-color);
  }
`;
