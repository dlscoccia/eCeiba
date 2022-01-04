import * as React from 'react';
import { Layout } from '../../../shared/components/Layout';
import VideoBanner from '../components/VideoBanner/VideoBanner';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { SliderData } from '../utils/slider';
import ServicesGallery from '../components/ServicesGallery/ServicesGallery';
import Suscribete from '../components/Suscribete/Suscribete';

const MainPage = () => (
  <Layout title="Inicio" description="">
    <VideoBanner />
    <ServicesGallery />
    <ImageSlider slides={SliderData} />
    <Suscribete />
  </Layout>
);

export default MainPage;
