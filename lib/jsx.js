"use strict";

var React = require('react');

var StaticRouter = require('react-router-dom');

var reactRouter = function reactRouter(CompiledApp, _ref) {
  var req = _ref.req;
  var componentRoute = req.url;
  var context = {};
  var jsx = React.createElement(StaticRouter, {
    context: context,
    location: componentRoute
  }, React.createElement(CompiledApp, null));
  return jsx;
};

module.exports = reactRouter;