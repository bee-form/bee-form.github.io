import React, {Component} from 'react';
import {createForm} from "bee-form-react";
import {required} from "bee-form-validators";

export default class CreateForm extends Component {

    constructor(props, context) {
        super(props, context);

        this.form = createForm({
            "name": [required],
        });

        this.form.onChange(() => this.forceUpdate());
    }

    render() {
        const fv = this.form.createView();

        return (
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
        );
    }
}
