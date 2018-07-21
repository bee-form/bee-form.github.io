import React from "react";

export default (fv) => (
    <div>
        {/* #content */}
        <select {...fv.bindMultipleSelect("selected")} multiple style={{width: 50}}>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <br/>
        <span>Selected: {JSON.stringify(fv.getValue("selected"))}</span>
        {/* #content end */}
    </div>
);