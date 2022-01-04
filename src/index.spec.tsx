import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/core/redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/App';

const render = (component: React.ReactNode) =>
  rtlRender(
    <React.StrictMode>
      <Provider store={store}>
        <Router>{component}</Router>
      </Provider>
    </React.StrictMode>
  );

test('El componente carga', () => {
  const component = render(<App />);
  expect(component).toBeDefined();
});
