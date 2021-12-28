import React from 'react';
import ImageSlider from './feature/components/ImageSlider/ImageSlider';
import Productos from './feature/components/Products/Products';
import SliderData from './core/api/SliderData';
import ServicesGallery from './feature/components/ServicesGallery/ServicesGallery';

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
      <ImageSlider slides={SliderData} />
      <ServicesGallery />
      <Productos />
    </>
  );
};

export default Main;
