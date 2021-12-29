import styled from 'styled-components';

export const Wrapper = styled.div`
  .section-container {
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 40px;
    justify-content: space-evenly;
    align-items: center;
  }

  .service {
    flex: 1;
    height: 335px;
    text-align: center;
  }

  .service:nth-child(2) {
    margin: 0 50px;
    align-self: flex-end;
  }

  .services {
    display: flex;
    height: 400px;
    margin-top: 30px;
  }

  .service_header {
    margin: 20px 0;
    font-family: var(--logo-font);
    font-size: 90px;
  }
  .service_subheader {
    margin: 20px 0;
    font-family: var(--logo-font);
    font-size: 60px;
  }

  .service_text {
    font-family: var(--text-font);
    width: 90%;
  }
`;
