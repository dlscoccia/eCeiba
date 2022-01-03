import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .slider {
    margin: 100px 0;
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image {
    width: 1000px;
    height: auto;
  }

  .right-arrow {
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: var(--light-color);
    background: var(--dark-color);
    border-radius: 10px;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .left-arrow {
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: var(--light-color);
    background: var(--dark-color);
    border-radius: 10px;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.1);
  }

  .productosBtn {
    text-align: center;
    font-size: 32px;
    padding: 15px 25px;
    font-family: var(--text-font);
    border: 1px solid var(--dark-color);
    color: var(--light-color);
    background: var(--dark-color);
    text-decoration: none;
    text-align: center;
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.4s ease;
    }
  }

  @media (max-width: 1240px) {
    .image {
      width: 800px;
    }
  }
  @media (max-width: 1080px) {
    .image {
      width: 700px;
    }
  }
  @media (max-width: 840px) {
    .image {
      width: 600px;
    }
  }
  @media (max-width: 768px) {
    margin-top: 500px;
    .image {
      width: 500px;
    }
    .slider {
      margin-bottom: 0;
    }
  }
  @media (max-width: 600px) {
    margin: 650px auto 0 auto;

    .image {
      width: 400px;
    }
  }
  @media (max-width: 480px) {
    .image {
      width: 300px;
    }
  }
`;
