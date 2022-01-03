import styled from 'styled-components';

export const Wrapper = styled.div`
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
    height: 600px;
    border-radius: 10px;
  }

  .right-arrow {
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .left-arrow {
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #000;
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
`;
