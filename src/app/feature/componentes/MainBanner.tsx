import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('https://thumbs.dreamstime.com/b/vintage-wooden-table-shelf-potted-green-bonsai-ceramic-vase-light-blue-colored-background-mock-up-copy-space-zen-concept-159524073.jpg');
  background-size: cover;
  background-position: center;
  img {
    width: 100%;
  }
`;

const MainBanner = () => {
  return <Container></Container>;
};

export default MainBanner;
