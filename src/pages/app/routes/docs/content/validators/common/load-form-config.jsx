import React from "react";
import {Form} from "bee-form-react";

function runFormConfig(module) {
    return run(module.default || module);
}

exports.runFormConfig = runFormConfig;

const run = (runFormConfig) => (field, errorMessage) => () => (
    <Form
        config={runFormConfig}
        render={(fv) => (
            fv.withControl(field, ({bind, withError}) => (
                <div>
                    <input {...bind()} placeholder="Write something..."/>
                    {withError((error) => (
                        <div className="text-error">
                            {errorMessage}
                        </div>
                    ))}
                </div>
            ))
        )}
    />
);
