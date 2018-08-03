import {runFormConfig} from "../../common/load-form-config";

module.exports = {
    "sample-required.jsx"   : runFormConfig(require("./sample-required.jsx"))("name" , "Name is required"),
    "sample-email.jsx"      : runFormConfig(require("./sample-email.jsx")   )("email", "Wrong email format"),
    "sample-phone.jsx"      : runFormConfig(require("./sample-phone.jsx")   )("phone", "Wrong phone format"),
    "sample-humanName.jsx"  : runFormConfig(require("./sample-humanName.jsx"))("first_name", "This is not a human name"),
    "sample-maxLength.jsx"  : runFormConfig(require("./sample-maxLength.jsx"))("code", "Your code is too long"),
    "sample-either.jsx"  : runFormConfig(require("./sample-either.jsx"))("sex", "Not a valid sex value"),
    // "sample-equalsPath.jsx"  : runFormConfig(require("./sample-equalsPath.jsx"))("sex", "Not a valid sex value"),
};
