import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './shared/components/Footer';
import Main from './Main';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
