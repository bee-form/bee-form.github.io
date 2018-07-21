import React from "react";

export default (fv) => (
    <div>
        {/* #content */}
        <input type="checkbox" id="jack" {...fv.bindCheckboxes("checkedNames", "Jack")}/>
        <label htmlFor="jack">Jack</label>
        <input type="checkbox" id="john" {...fv.bindCheckboxes("checkedNames", "John")}/>
        <label htmlFor="john">John</label>
        <input type="checkbox" id="mike" {...fv.bindCheckboxes("checkedNames", "Mike")}/>
        <label htmlFor="mike">Mike</label>
        <br/>
        <span>Checked names: {JSON.stringify(fv.getValue("checkedNames"))}</span>
        {/* #content end */}
    </div>
);