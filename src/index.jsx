import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import configureStore from './store';
import './css/Global.scss';
import './css/fonts/OpenSans.woff2';
import './css/fonts/OpenSans-Bold.woff2';
import './css/fonts/OpenSans-Italic.woff2';
import './css/fonts/OpenSans-BoldItalic.woff2';

render(
  <AppContainer>
    <Root store={configureStore()} />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => { render(<Root store={configureStore()} />); });
}
