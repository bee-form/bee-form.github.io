const {quickForm} = require("../../../../common/quick-form");

module.exports = {
    "sample_json.jsx": quickForm(require("./sample_json.jsx")),
    "sample_int.jsx": quickForm(require("./sample_int.jsx")),
    "sample_trim.jsx": quickForm(require("./sample_trim.jsx")),
};
