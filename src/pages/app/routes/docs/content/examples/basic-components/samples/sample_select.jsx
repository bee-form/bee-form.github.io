import React from "react";

export const render = (fv) => (
    <div>
        {/* #render */}
        <select {...fv.bind("selected")}>
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>Selected: {fv.getValue("selected")}</span>
        {/* #render end */}
    </div>
);