import React, {Component} from 'react';
import {connectForm} from "bee-form-react";
import {required} from "bee-form-validators";

const formConfig = {
    "name": [required],
};

const ConnectForm = ({fv}) => (
    <div className="sample-create-form">

        <div className="">
            <input
                {... fv.bind("name")}
                placeholder="Your name..."
            />
        </div>

        <div className="">
            Hello {fv.getValue("name") || "there"}.
        </div>
    </div>
);

export default connectForm(ConnectForm, formConfig);