import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

import { connect } from 'react-redux';

import Navbar from './feature/components/Navbar/Navbar';
import Products from './feature/components/Products/Products';
import Cart from './feature/components/Cart/Cart';
import SingleItem from './feature/components/SingleItem/SingleItem';

import ProductType from './core/redux/Shopping/shopping-reducer';

type Props = {
  current: typeof ProductType;
};

function App({ current }: Props) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state: any) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
