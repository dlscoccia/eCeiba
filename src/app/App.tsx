import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Navbar from './feature/components/Navbar/Navbar';
import ProductType from './core/redux/Shopping/shopping-reducer';
import Footer from './shared/components/Footer/Footer';
import { AppRouter } from './AppRouter';

type Props = {
  current: typeof ProductType;
};

function App({ current }: Props) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <AppRouter />
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
