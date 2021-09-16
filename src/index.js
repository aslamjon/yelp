import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './App';
import Theme from './components/theme-provider/Theme-Provider';



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Theme>
        <App />
      </Theme>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


