import React from "react";

export const render = (fv) => (
    <div>
        {/* #render */}
        <input type="radio" id="one" {...fv.bindRadio("picked", "One")}/>
        <label htmlFor="one">One</label>
        <br/>
        <input type="radio" id="two" {...fv.bindRadio("picked", "Two")}/>
        <label htmlFor="two">Two</label>
        <br/>
        <span>Picked: {fv.getValue("picked")}</span>
        {/* #render end */}
    </div>
);