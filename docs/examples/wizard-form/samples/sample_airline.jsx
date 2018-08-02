import React from "react";
import {createForm} from "bee-form-react";
import {required, notEqualsPath, equals} from "bee-form-validators";
import {intNumber} from "bee-form-tunnels";
import {Step1Flight} from "./step1-flight";
import {Step2Guests} from "./step2-guests";
import {Step3Time} from "./step3-time";
import {Step4SeatPositions} from "./step4-seat-positions";
import {Step5Checkout} from "./step5-checkout";

class SampleAirline extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            stepIndex: 0,
        };


        let initData = {
            guests: [{}],
        };

        this.form = createForm({
            "flight.from": [required, notEqualsPath("flight.to")],
            "flight.to"  : [required, notEqualsPath("flight.from")],

            "guests[*].name"  : [required],
            "guests[*].age"  : {
                validators: [required],
                tunnel: [intNumber],
            },

            "time": [required],

            "seat_positions": [
                // Validate if there are a seat for each guests
                {name: "length", validate: (positions, data) => positions ? positions.length === data.guests.length : false}
            ],
            "checkout.ok": [equals(true)],
        }, initData);

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
            {
                label: "Time",
                render: () => (
                    <Step3Time
                        fv={fv.scope("time")}
                        onNext={next}
                    />
                ),
            },
            {
                label: "Seat positions",
                render: () => (
                    <Step4SeatPositions
                        fv={fv.scope("seat_positions")}
                        onNext={next}
                    />
                ),
            },
            {
                label: "Seat positions",
                render: () => (
                    <Step5Checkout
                        fv={fv.scope("checkout")}
                        onFinish={() => alert(`Here is your data:\n\n${JSON.stringify(fv.getValue())}\n\nJust post to server and done`)}
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