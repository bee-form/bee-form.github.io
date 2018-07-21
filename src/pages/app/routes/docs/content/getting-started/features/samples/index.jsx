const {runDefault} = require("../../../../common/jsx-run-default");

module.exports = {
    "sample_async.jsx": runDefault(require("./sample_async.jsx")),
    "sample_async_debounce.jsx": runDefault(require("./sample_async_debounce.jsx")),
};
