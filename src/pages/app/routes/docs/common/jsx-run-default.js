const React = require("react");
function runDefault(module) {
    return () => {

        const Default = module.default || module;

        return React.createElement(Default);
    };
}

exports.runDefault = runDefault;