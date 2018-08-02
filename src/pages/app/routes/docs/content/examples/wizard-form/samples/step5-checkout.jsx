import cln from "classnames";
import React from "react";

export const Step5Checkout = ({fv, onFinish}) => {

    return (
        <div>
            <div className="">
                <input
                    type="checkbox"
                    {...fv.bindCheckbox("ok")}
                />
                Check this box, then go out
            </div>
            
            <button
                disabled={!fv.isValid()}
                onClick={onFinish}
            >
                Finish
            </button>
        </div>
    );
};

const s = {
    selected: {
        fontWeight: "bold",
        background: "#145ad8",
        color: "white",
    },
    position: {
        border: "1px solid grey",
        padding: "3px 10px",
        display: "inline-block",
    },
};