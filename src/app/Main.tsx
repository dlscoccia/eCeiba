import React from 'react';
import ImageSlider from './feature/components/ImageSlider/ImageSlider';
import Productos from './feature/components/Products/Products';
import SliderData from './core/api/SliderData';
import ServicesGallery from './feature/components/ServicesGallery/ServicesGallery';
import VideoBanner from './feature/components/VideoBanner/VideoBanner';
import Suscribete from './feature/components/Suscribete/Suscribete';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  qty: number;
};

const Main = () => {
  return (
    <>
      <VideoBanner />
      <ServicesGallery />
      <ImageSlider slides={SliderData} />
      <Productos />
      <Suscribete />
    </>
  );
};

export default Main;
