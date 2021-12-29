import React, { ReactNode } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import store from '../../core/redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

const render = (component: ReactNode) =>
  rtlRender(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );

test('renders content', () => {
  const component = render(<Navbar />);
  component.getByText('eCeiba');
  component.getByAltText('logo');
  component.getByAltText('shopping cart');
  component.getByText('0');
});

test('click on cart', () => {
  const component = render(<Navbar />);

  const cart = component.container.querySelector('button');
});
