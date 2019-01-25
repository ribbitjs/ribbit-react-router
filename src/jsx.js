import { StaticRouter } from 'react-router-dom';

const reactRouter = CompiledApp => {
    let componentRoute = req.url;
    const context = { 
        data: {}, 
        head: [],
        req
    }
    const jsx = (
        <StaticRouter context={context} location={componentRoute}>
            <CompiledApp />
        </StaticRouter>
    )
    return jsx
}

module.exports = reactRouter; 