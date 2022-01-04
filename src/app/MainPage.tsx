import * as React from 'react';
import { Layout } from './shared/components/Layout';
import VideoBanner from './feature/Home/components/VideoBanner/VideoBanner';
import ImageSlider from './feature/Home/components/ImageSlider/ImageSlider';
import { SliderData } from './feature/Home/utils/slider';
import ServicesGallery from './feature/Home/components/ServicesGallery/ServicesGallery';
import Suscribete from './feature/Home/components/Suscribete/Suscribete';

const MainPage = () => (
  <Layout title="Inicio" description="">
    <VideoBanner />
    <ServicesGallery />
    <ImageSlider slides={SliderData} />
    <Suscribete />
  </Layout>
);

export default MainPage;
