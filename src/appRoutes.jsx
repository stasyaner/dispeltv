import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={MainContainer} />
  </Switch>
);

export default AppRoutes;
