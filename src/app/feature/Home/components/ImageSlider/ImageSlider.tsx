import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Wrapper } from './ImageSlider.styles';

type SlidesProps = {
  slides: { image: string }[];
};

const ImageSlider = ({ slides }: SlidesProps) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {});

  return (
    <Wrapper>
      <section className="slider">
        <FaArrowAltCircleLeft
          className="left-arrow"
          onClick={prevSlide}
          role="button"
        />
        <FaArrowAltCircleRight
          className="right-arrow"
          onClick={nextSlide}
          role="button"
        />
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
              data-testid={index}
            >
              {index === current && (
                <img src={slide.image} alt="slide" className="image" />
              )}
            </div>
          );
        })}
      </section>
      <Link to="/productos" className="productosBtn">
        Nuestros productos
      </Link>
    </Wrapper>
  );
};

export default ImageSlider;
