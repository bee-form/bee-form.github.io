import {runFormConfig} from "../../common/load-form-config";

module.exports = {
    "sample_required.jsx": runFormConfig(require("./sample_required.jsx"), "name"),
};
