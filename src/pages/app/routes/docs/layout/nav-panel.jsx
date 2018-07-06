import cln from "classnames";
import React from "react";
import {FComponent} from "../../../../common/f-component";

export class NavPanel extends FComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            expand: false,
        };
    }

    render() {
        const {content} = this.props;
        const {expand} = this.state;

        const toggle = (
            <div className="toggle" onClick={() => this.setState({expand: !expand})}>
                {new Array(3).fill(0).map((_, i) => (
                    <div className="bar" key={i}/>
                ))}
            </div>
        );

        return (
            <div className="nav-panel">
                <div className="mobile-header">
                    {toggle}
                </div>
                <div className={cln("content", {expand})} onClick={() => this.setState({expand: false})}>
                    {content}
                </div>
            </div>
        );
    }
}
