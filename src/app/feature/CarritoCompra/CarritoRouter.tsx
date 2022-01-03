import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyFallback } from '../../shared/components/LazyFallback';
const MainPage = React.lazy(() => import('./pages/Main'));

export const CarritoRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    <Switch>
      <Route path="/" component={MainPage}></Route>
    </Switch>
  </React.Suspense>
);
