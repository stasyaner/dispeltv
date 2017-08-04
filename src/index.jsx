import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import configureStore from './store';
import './css/Global.scss';
import './css/fonts/OpenSans-Regular.ttf';

render(
  <AppContainer>
    <Root store={configureStore()} />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => { render(<Root store={configureStore()} />); });
}
