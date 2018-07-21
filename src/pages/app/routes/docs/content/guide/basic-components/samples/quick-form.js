import {Form} from "bee-form-react";

const React = require("react");
function quickForm(module) {
    return () => {

        const render = module.default || module;

        return React.createElement(Form, {
            render,
        });
    };
}

exports.quickForm = quickForm;