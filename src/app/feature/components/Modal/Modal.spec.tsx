import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Modal from './Modal';

test('Renders the component', () => {
  const modalDiv = document.createElement('div');
  modalDiv.setAttribute('id', 'root-modal');
  // get element
  const component = render(
    <Modal onClose={() => {}}>
      <div>Soy el contenido de la modal</div>
    </Modal>
  );
  component.getByText('Soy el contenido de la modal');
  component.getByText('X');
});
