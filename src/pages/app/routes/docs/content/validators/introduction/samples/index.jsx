import {runFormConfig} from "../../common/load-form-config";
import {snippet} from "../../common/snippet";

module.exports = {
    "sample_required.jsx": {
        content: snippet(require("!raw-loader!./sample_required.jsx"), "content"),
        demo: runFormConfig(require("./sample_required.jsx"), "name"),
    },
};
