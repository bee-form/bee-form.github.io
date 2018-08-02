import cln from "classnames";
import React from "react";

export const Step2Guests = ({fv, onNext}) => {

    return (
        <div>
            {fv.map("", (guestFv) => (
                <div>
                    <div className="form-group">
                        <div className="control-label">Name:</div>
                        {guestFv.withControl("name", ({bind}) => (
                            <input {...bind()} />
                        ))}
                    </div>
                    <div className="form-group">
                        <div className="control-label">Age:</div>
                        {guestFv.withControl("age", ({bind}) => (
                            <input {...bind()} />
                        ))}
                    </div>
                </div>
            ))}

            <div className="">
                <button
                    onClick={() => fv.changeValue((list) => [...list, {}])}
                >Add a new guest</button>
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