import cln from "classnames";
import React from "react";

export const Step3Time = ({fv, onNext}) => {

    const times = [
        "9:00",
        "9:30",
        "10:00",
    ];

    const renderSelect = ({bind}) => (
        <select
            {...bind()}
        >
            <option disabled value="">Please select...</option>
            {times.map((time) => (
                <option value={time} key={time}>{time}</option>
            ))}
        </select>
    );

    return (
        <div>
            <div className="form-group">
                <div className="control-label">Choose time:</div>
                {fv.withControl("", renderSelect)}
            </div>

            <button
                disabled={!fv.isValid()}
                onClick={onNext}
            >
                Next
            </button>
        </div>
    );
};