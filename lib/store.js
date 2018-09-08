'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import logger from '../middlewares/logger'
// import updateRate from '../middlewares/updateOneRate'

// const enhancer = applyMiddleware(logger)
// const store = createStore(reducer, {}, enhancer)
// import { createStore, applyMiddleware } from 'redux'
var store = (0, _redux.createStore)(_reducers2.default, {});

//dev only
window.store = store;

exports.default = store;