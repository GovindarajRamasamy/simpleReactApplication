import "./assets/main.less"

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { App } from './components';
import reducers from './reducer';

const store = compose(applyMiddleware(thunkMiddleware))(createStore)(reducers);

ReactDOM.render((
  <Provider store = {store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById('app'))
module.hot.accept();