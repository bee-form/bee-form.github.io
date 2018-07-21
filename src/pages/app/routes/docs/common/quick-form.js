const {Form} = require("bee-form-react");
const React = require("react");
function quickForm(module) {
    return () => {
        return React.createElement(Form, {
            render: module.render,
            config: module.formConfig,
        });
    };
}

exports.quickForm = quickForm;