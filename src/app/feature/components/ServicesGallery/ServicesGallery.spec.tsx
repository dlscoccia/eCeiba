import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ServicesGallery from './ServicesGallery';

test('Renders the component', () => {
  const component = render(<ServicesGallery />);
  component.getAllByAltText('arboles');
  component.getByText('Arboles');
  component.getByText('Herramientas');
  component.getAllByAltText('herramientas');
  component.getAllByAltText('jardines');
  component.getByText('Jardines');
  const numberOfParagrahp = 3;
  expect(component.container.querySelectorAll('p')).toHaveLength(
    numberOfParagrahp
  );
});
