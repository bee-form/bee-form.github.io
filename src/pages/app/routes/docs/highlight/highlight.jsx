import cln from "classnames";
import React from "react";
import ReactDOM from "react-dom";
import {FComponent} from "../../../../common/f-component";
import hljs from "highlight.js";

export class HighlightJSX extends FComponent {

    componentDidMount() {
        hljs.highlightBlock(ReactDOM.findDOMNode(this));
    }

    render() {
        const {code} = this.props;

        return (
            <pre>
                <code>{code}</code>
            </pre>
        );
    }
}
