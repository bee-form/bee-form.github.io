import React, {Component} from 'react';
import {Form} from "bee-form-react";
import {required} from "bee-form-react/validators";

function validateName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name === "bee");
        }, 600);
    });
}

const formConfig = {
    "name": {
        validators: [required, {name: "async", validate: validateName}],
        debounce: 400,
    },
};

export default () => (
    <Form
        config={formConfig}
        render={(fv) => (
            fv.withControl("name", ({bind, withError}) => (
                <div className="sample">

                    <div className="">
                        <input
                            {... bind()}
                            placeholder="Your name..."
                        />
                    </div>

                    {withError((error) => (
                        <div className="text-error">
                            Error: {error.name}
                        </div>
                    ))}
                </div>
            ))
        )}
    />
);