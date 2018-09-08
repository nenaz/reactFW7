import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { params } from './routes'
import { store } from './store';

import Framework7React, { App, View, Page } from 'framework7-react';
import Framework7 from 'framework7';
Framework7.use(Framework7React);

ReactDOM.render(
  <Provider store={store}>
    <App params={params}>
      <View main url="/" />
    </App>
  </Provider>
, document.getElementById("index"));