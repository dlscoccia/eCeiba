import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

test('Renders the component', () => {
  const modalRoot = document.querySelector('#modal-root') as HTMLElement;
  expect(modalRoot).not.toBeInTheDocument();
});
