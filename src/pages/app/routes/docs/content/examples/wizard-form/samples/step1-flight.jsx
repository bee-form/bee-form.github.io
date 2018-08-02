import cln from "classnames";
import React from "react";

export const Step1Flight = ({fv, onNext}) => {

    const cities = [
        {value: "JFK", name: "New York JFK"},
        {value: "SFO", name: "San Francisco International Airport"},
        {value: "IAD", name: "Washington Dulles International Airport"},
    ];

    const renderSelect = ({bind}) => (
        <select
            {...bind()}
        >
            <option disabled value="">Please select...</option>
            {cities.map((city) => (
                <option value={city.value} key={city.value}>{city.name}</option>
            ))}
        </select>
    );

    return (
        <div>
            <div className="form-group">
                <div className="control-label">Departure:</div>
                {fv.withControl("from", renderSelect)}
            </div>
            <div className="form-group">
                <div className="control-label">Destination:</div>
                {fv.withControl("to", renderSelect)}
            </div>

            {fv.getValue("from") && fv.getValue("to") && !fv.isValid() && (
                <div className="error">
                    Departure and destination must be different
                </div>
            )}

            <button
                disabled={!fv.isValid()}
                onClick={onNext}
            >
                Next
            </button>
        </div>
    );
};