const {runDefault} = require("../../../../common/jsx-run-default");

module.exports = {
    "sample_async.jsx": {
        demo: runDefault(require("./sample_async.jsx")),
        content: require("!raw-loader!./sample_async.jsx"),
    },
    "sample_async_debounce.jsx": {
        demo: runDefault(require("./sample_async_debounce.jsx")),
        content: require("!raw-loader!./sample_async_debounce.jsx"),
    },
};
