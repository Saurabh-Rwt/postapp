import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import store from './Store/store'; 
import App from './App'; 

ReactDOM.render(
  <Provider store={store}> {/* Wrap your entire app with Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
