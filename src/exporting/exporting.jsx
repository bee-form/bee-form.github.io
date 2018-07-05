const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

function toHtml(Component, path) {
    const {renderToString} = require("react-dom/server");
    const StaticRouter = require('react-router-dom/StaticRouter').default;
    const {renderRoutes} = require('react-router-config');

    const React = require("react");


    return renderToString(
        React.createElement(StaticRouter, {location: "/", context: {}}, renderRoutes([{
            path,
            exact: true,
            component: Component,
        }]))
    );
}

const applyHtmlC = (indexHtml) => (html) =>  {
    return indexHtml.replace(`Loading...`, html);
};

const Exporting = {
    doExport: async (dir, indexPath) => {

        const applyHtml = applyHtmlC(await fs.readFileAsync(indexPath, "utf8"));

        fs.writeFileAsync(
            `${dir}/index.html`,
            applyHtml(toHtml(require("../pages/app/routes/home/home-route").HomeRoute, "/")),
        );

    },
};

exports.Exporting = Exporting;