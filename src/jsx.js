import React from "react";
import { StaticRouter } from "react-router-dom";

const reactRouter = ({ App, config }) => {
  const { req } = config;
  return (
    <StaticRouter context={{}} location={req}>
      <App />
    </StaticRouter>
  );
};

module.exports = reactRouter;
