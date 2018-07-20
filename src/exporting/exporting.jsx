import {HomeRoute} from "../pages/app/routes/home/home-route";
import {DocsRoute} from "../pages/app/routes/docs/docs-route";

const Promise = require('bluebird');
const apiConfig = require("../pages/common/api/api").apiConfig;
const Cacher = require("./cacher").Cacher;
const AsyncResolve = require("./async-resolve").AsyncResolve;
const mkdirp = Promise.promisify(require("mkdirp"));
const fs = Promise.promisifyAll(require('fs'));
const glob = Promise.promisify(require('glob'));
const Path = require("path");

async function renderComponent(component, path) {

    let cacher = Cacher.createCacher((path) => {
        // console.log(path)
        return fs.readFileAsync(`${__dirname}/../pages/app/routes/docs/content${path.replace(/^\/docs/, "")}`, "utf8");
    });

    let html = await AsyncResolve.asyncResolve({
        fn: () => {
            apiConfig.setFetcher({get: (url) => cacher.execute(url)});
            return toHtml(component, path);
        },
        getUnresolvedPromises: cacher.getUnresolvedPromises,
    });
    return {
        html,
        cached_gets: Object.keys(cacher.getCache()),
    };
}

function toHtml(component, path) {
    const {renderToString} = require("react-dom/server");
    const StaticRouter = require('react-router-dom/StaticRouter').default;
    const {renderRoutes} = require('react-router-config');

    const React = require("react");

    return renderToString(
        React.createElement(StaticRouter, {location: path, context: {}}, renderRoutes([{
            path,
            exact: true,
            component,
        }]))
    );
}

const applyHtmlC = (indexHtml) => (html, cached_gets) =>  {
    return indexHtml
        .replace(`Loading...`, html)
        .replace(`window.cached_gets = []`, `window.cached_gets = ${JSON.stringify(cached_gets)}`)
        ;
};

async function listDocPaths() {
    let docsAbs = Path.resolve(`${__dirname}/../pages/app/routes/docs/content`);
    return await glob(`${docsAbs}/**/index.md`).map((p) =>
        p.substring(docsAbs.length + 1).replace(/\/index\.md$/, "")
    );
}

const Exporting = {
    doExport: async (dir, indexPath) => {

        const applyHtml = applyHtmlC(await fs.readFileAsync(indexPath, "utf8"));


        const exportList = [
            {
                path: "/",
                component: HomeRoute,
            },
            ... await listDocPaths().map((p) => ({
                path: `/docs/${p}/`,
                component: DocsRoute,
            })),
        ];

        for (const exp of exportList) {
            const expDir = `${dir}/${exp.path.replace(/^\/|\/$/g, "")}`;

            await mkdirp(expDir);

            const {html, cached_gets} = await renderComponent(exp.component, exp.path);
            fs.writeFileAsync(
                `${expDir}/index.html`,
                applyHtml(html, cached_gets),
            );
        }


    },
};

exports.Exporting = Exporting;