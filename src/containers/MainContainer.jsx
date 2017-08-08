import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TopMenu from '../components/TopMenu';
import StreamContainer from './StreamContainer';

class MainContainer extends Component {
  constructor(...restProps) {
    super(...restProps);
  }

  render() {
    return (
      <div className="main-container">
        <TopMenu />
        <Route path="/:userName" component={StreamContainer} />
      </div>
    );
  }
}

export default MainContainer;
