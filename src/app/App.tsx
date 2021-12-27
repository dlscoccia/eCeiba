import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Navbar from './feature/components/Navbar/Navbar';
import Main from './Main';
import Cart from './feature/components/Cart/Cart';
import SingleItem from './feature/components/SingleItem/SingleItem';
import Checkout from './feature/components/Checkout/Checkout';
import ProductType from './core/redux/Shopping/shopping-reducer';
import Footer from './shared/components/Footer';

type Props = {
  current: typeof ProductType;
};

function App({ current }: Props) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={SingleItem} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
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
