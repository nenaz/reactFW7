import React from "react";
import ReactDOM from "react-dom";
import { params } from './routes'

import Framework7React, { App, View, Page } from 'framework7-react';
import Framework7 from 'framework7';
Framework7.use(Framework7React);

ReactDOM.render(
  <App params={params}>
    <View main url="/" />
  </App>
, document.getElementById("index"));