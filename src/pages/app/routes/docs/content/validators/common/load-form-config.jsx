import React from "react";
import {Form} from "bee-form-react";

function runFormConfig(module, name) {
    return () => run(module.default || module, name);
}

exports.runFormConfig = runFormConfig;

const run = (runFormConfig, field) => (
    <Form
        config={runFormConfig}
        render={(fv) => (
            fv.withControl("name", ({bind, withError}) => (
                <div>
                    <input {...bind()} placeholder="Write something..."/>
                    {withError((error) => (
                        <div className="text-error">
                            <span style={{textTransform: "capitalize"}}>{field}</span> is {error.name}
                        </div>
                    ))}
                </div>
            ))
        )}
    />
);
