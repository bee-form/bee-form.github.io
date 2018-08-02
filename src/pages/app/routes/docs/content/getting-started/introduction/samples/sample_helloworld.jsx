import React, {Component} from 'react';
import {createForm} from "bee-form-react";
import {required} from "bee-form-validators";

export default class HelloWorld extends Component {

    constructor(props, context) {
        super(props, context);

        this.form = createForm({
            "name": [required],
        }, {name: "World"});

        this.form.onChange(() => this.forceUpdate());
    }

    render() {
        const fv = this.form.createView();

        return (
            <div className="first-bee-form">

                <div>
                    <input
                        {... fv.bind("name")}
                    />
                </div>

                <div>
                    Hello {fv.getValue("name")}
                </div>
            </div>
        );
    }
}
