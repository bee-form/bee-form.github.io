import React, {Component} from 'react';
import {Form} from "bee-form-react";
import {required} from "bee-form-validators";

const formConfig = {
    "name": [required],
};

export default () => (
    <Form
        config={formConfig}
        render={(fv) => (
            <div className="sample-create-form">

                <div>
                    <input
                        {... fv.bind("name")}
                        placeholder="Your name..."
                    />
                </div>

                <div>
                    Hello {fv.getValue("name") || "there"}.
                </div>
            </div>
        )}
    />
);