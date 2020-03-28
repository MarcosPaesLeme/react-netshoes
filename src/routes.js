import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes() {
  return (
     <BrowserRouter>
      <Switch>
        <Route exact path="/cart" component={withRouter(Cart)} />
        <Route exact path="/" component={withRouter(Home)} />
      </Switch>
   </BrowserRouter>
  );
}
