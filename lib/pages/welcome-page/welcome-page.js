'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WelcomePage = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _framework7React = require('framework7-react');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var WelcomePage = exports.WelcomePage = function WelcomePage() {
  return React.createElement(
    _framework7React.Page,
    { name: 'welcome' },
    React.createElement(_framework7React.Navbar, { title: 'welcome' })
  );
};