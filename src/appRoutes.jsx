import React from 'react';
import { Switch, Route } from 'react-router-dom';

const test = () => <div>hello</div>;

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={test} />
  </Switch>
);

export default AppRoutes;
