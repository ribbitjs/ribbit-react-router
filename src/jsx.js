const React = require('react');
const StaticRouter = require('react-router-dom');

const reactRouter = (CompiledApp, { req }) => {
    let componentRoute = req.url;
    const context = {};
    const jsx = (
        <StaticRouter context={context} location={componentRoute}>
            <CompiledApp />
        </StaticRouter>
    )
    return jsx;
}

module.exports = reactRouter;
