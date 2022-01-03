import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import VideoBanner from './VideoBanner';

test('Renders the component', () => {
  const component = render(<VideoBanner />);
  component.getByText('El Bonsái es un arte viviente');
  component.container.querySelector('video');
});
