import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;

  .background {
    width: 100%;
    height: 100vh;
    background-image: url('https://images.pexels.com/photos/8280940/pexels-photo-8280940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size: cover;
    background-position: center;
  }

  h2 {
    font-family: var(--logo-font);
    font-size: 90px;
    margin: 50px 0;
    text-align: center;
    color: var(--light-color);
  }

  .filters {
    display: flex;
    justify-content: space-evenly;
    button {
      text-align: center;
      font-size: 18px;
      padding: 15px 25px;
      font-family: var(--text-font);
      border: 1px solid var(--dark-color);
      color: var(--light-color);
      background: var(--dark-color);
      text-decoration: none;
      text-align: center;

      &:hover {
        border: 1px solid var(--light-color);
        opacity: 0.9;
      }
    }
  }
`;
