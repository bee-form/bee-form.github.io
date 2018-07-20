
module.exports = {
    "sample1.jsx": {
        demo: runDefault(require("./sample1.jsx")),
        content: require("!raw-loader!./sample1.jsx"),
    },
};

function runDefault(module) {
    return () => {

        const Default = module.default;

        return <Default/>;
    };
}
