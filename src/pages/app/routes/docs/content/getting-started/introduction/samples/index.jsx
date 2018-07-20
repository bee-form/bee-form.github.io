import {runDefault} from "../../../../common/jsx-run-default";

module.exports = {
    "sample1.jsx": {
        demo: runDefault(require("./sample1.jsx")),
        content: require("!raw-loader!./sample1.jsx"),
    },
};
