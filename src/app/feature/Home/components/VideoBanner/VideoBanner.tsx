import React from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
} from './VideoBanner.styles';
const video = require('../../../../../assets/videos/hero.mp4');

const VideoBanner = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} />
      </HeroBg>
      <HeroContent>
        <h2>El Bonsái es un arte viviente</h2>
      </HeroContent>
    </HeroContainer>
  );
};

export default VideoBanner;
