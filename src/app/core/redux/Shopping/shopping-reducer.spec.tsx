import React, { ReactNode } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../core/redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

const render = (component: ReactNode) =>
  rtlRender(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );

test('should return the initial state', () => {});
