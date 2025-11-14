
const _dobs = require("dobs");
const _internal = require("dobs/_build");
const _dobs_http = _internal.createHTTPServer;

const _config = _dobs.resolveConfig(require("D://zely-versions-benchmark//node_modules//.temp//ni1dbd7r.js") ?? {});
const _middlewares = _config?.middlewares;

const _app = _dobs_http();

_app.use(...[..._middlewares, _internal._buildInternalMiddleware({"index.ts": require("D://zely-versions-benchmark//.dobs//routes//index.js")}, _config)]);

_app.listen(process.env.PORT ?? _config.port, () => {console.log("server is running on " + (process.env.PORT ?? _config.port))});
