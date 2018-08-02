import React from "react";

export const render = (fv) => (
    <div>
        {/* #render */}
        <input type="checkbox" id="checkbox" {...fv.bindCheckbox("checked")}/>
        <label htmlFor="checkbox">{JSON.stringify(fv.getValue("checked"))}</label>
        {/* #render end */}
    </div>
);