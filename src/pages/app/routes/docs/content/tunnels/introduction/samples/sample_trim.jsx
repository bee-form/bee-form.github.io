// #config
import {trim} from "bee-form-tunnels";

const formConfig = {
    "content": {
        tunnel: [trim],
    },
};
// #config end

exports.formConfig = formConfig;

export const render = (fv) => (
    <div className="">
        {/* #render */}

        <textarea {...fv.bind("content")} />

        <pre>{JSON.stringify(fv.getData())}</pre>
        {/* #render end */}

        {fv.withError("content", (error) => (
            <div className="error">
                Has error: {error.name}
            </div>
        ))}
    </div>
);