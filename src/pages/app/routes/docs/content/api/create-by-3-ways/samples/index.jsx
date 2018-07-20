
module.exports = {
    "sample_createForm.jsx": {
        demo: runDefault(require("./sample_createForm.jsx")),
        content: require("!raw-loader!./sample_createForm.jsx"),
    },
    "sample_connectForm.jsx": {
        demo: runDefault(require("./sample_connectForm.jsx")),
        content: require("!raw-loader!./sample_connectForm.jsx"),
    },
    "sample_Form_component.jsx": {
        demo: runDefault(require("./sample_Form_component.jsx")),
        content: require("!raw-loader!./sample_Form_component.jsx"),
    },
};

function runDefault(module) {
    return () => {

        const Default = module.default;

        return <Default/>;
    };
}
