'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _welcomePage = require('./pages/welcome-page');

var routes = exports.routes = {
  name: 'My App',
  id: 'com.myapp.test',
  // specify routes for app
  routes: [{
    path: '/',
    component: _welcomePage.WelcomePage
  }, {
    path: '/login',
    component: _welcomePage.WelcomePage
  }]
};