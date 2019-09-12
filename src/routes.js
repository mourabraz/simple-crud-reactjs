import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Main from './components/Main';
import Home from './pages/Home';
import Users from './pages/Users';

export default function Routes() {
  return (
    <BrowserRouter>
      <Nav />
      <Main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
        </Switch>
      </Main>
    </BrowserRouter>
  );
}
