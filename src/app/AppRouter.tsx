import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './shared/components/Navbar';
import Footer from './shared/components/Footer';
import Main from './Main';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
