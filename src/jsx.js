import { StaticRouter } from 'react-router-dom';
const { renderToNodeStream } = require('react-dom/server');

const reactRouter = CompiledApp => {
    let componentRoute = req.url;
    const context = {};
    const jsx = (
        <StaticRouter context={context} location={componentRoute}>
            <CompiledApp />
        </StaticRouter>
    )
    const reactStream = renderToNodeStream(jsx);
    return reactStream;
}

module.exports = reactRouter; 