import React, { Component } from 'react';
import TopMenu from '../components/TopMenu';

class MainContainer extends Component {
  constructor(...restProps) {
    super(...restProps);
  }

  render() {
    return (
      <div className="main-container">
        <TopMenu />
        {this.props.children}
      </div>
    );
  }
}

export default MainContainer;
