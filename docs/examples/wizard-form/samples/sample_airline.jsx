import cln from "classnames";
import React from "react";
import {createForm} from "bee-form-react";
import {required, notEqualsPath} from "bee-form-validators";
import {intNumber} from "bee-form-tunnels";
import {Step1Flight} from "./step1-flight";
import {Step2Guests} from "./step2-guests";

class SampleAirline extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            stepIndex: 0,
        };

        this.form = createForm({
            "flight.from": [required, notEqualsPath("flight.to")],
            "flight.to"  : [required, notEqualsPath("flight.from")],

            "guests[*].name"  : [required],
            "guests[*].age"  : {
                validators: [required],
                tunnel: [intNumber],
            },
        }, {
            guests: [{}],
        });

        this.form.onChange(() => this.forceUpdate());

    }

    render() {
        const {stepIndex} = this.state;
        const fv = this.form.createView();

        const next = () => this.setState({stepIndex: stepIndex + 1});

        const steps = [
            {
                label: "Flight",
                render: () => (
                    <Step1Flight
                        fv={fv.scope("flight")}
                        onNext={next}
                    />
                ),
            },
            {
                label: "Guests",
                render: () => (
                    <Step2Guests
                        fv={fv.scope("guests")}
                        onNext={next}
                    />
                ),
            },
        ];

        return (
            <div>
                {steps[stepIndex].render()}

                <pre>{JSON.stringify(fv.getData())}</pre>
            </div>
        );
    }
}

export default () => <SampleAirline/>;