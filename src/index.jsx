import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import configureStore from './store';
import './assetsLoader';

render(
  <AppContainer>
    <Root store={configureStore()} />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => { render(<Root store={configureStore()} />); });
}
