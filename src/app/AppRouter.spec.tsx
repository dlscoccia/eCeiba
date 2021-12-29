import React, { ReactNode } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render as rtlRender } from '@testing-library/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import { Provider } from 'react-redux';
import store from './core/redux/store';

const render = (component: ReactNode) =>
  rtlRender(
    <Provider store={store}>
      <Router>
        <Switch>{component}</Switch>
      </Router>
    </Provider>
  );

test('Approuter', () => {
  const component = render(<AppRouter />);
  expect(component).toBeDefined();
});
