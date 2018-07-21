import React from "react";

export default (fv) => (
    <div>
        {/* #content */}
        <input type="checkbox" id="checkbox" {...fv.bindCheckbox("checked")}/>
        <label htmlFor="checkbox">{JSON.stringify(fv.getValue("checked"))}</label>
        {/* #content end */}
    </div>
);