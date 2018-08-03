// #content
import {either} from "bee-form-validators";

const formConfig = ({
    "sex": [either("male", "female", "gay", "lesbian")],
});
// #content end

export default formConfig;