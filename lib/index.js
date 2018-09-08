"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _framework7React = require("framework7-react");

var _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _framework7React.App,
  { params: _routes.routes },
  _react2.default.createElement(_framework7React.View, { main: true, url: "/" })
), document.getElementById("index"));