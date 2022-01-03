import React from 'react';
import { Layout } from '../../../shared/components/Layout';
import { RouteComponentProps } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { SliderData } from '../../../core/api/slider';

const HomeMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Home" description="Home de la aplicación">
    <ImageSlider slides={SliderData} />
  </Layout>
);

HomeMainPage.displayName = 'HomeMainPage';

export default HomeMainPage;
