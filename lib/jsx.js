"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reactRouter = function reactRouter(_ref) {
  var App = _ref.App,
      config = _ref.config;
  var req = config.req;
  return _react.default.createElement(_reactRouterDom.StaticRouter, {
    context: {},
    location: req
  }, _react.default.createElement(App, null));
};

module.exports = reactRouter;