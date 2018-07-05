import cln from "classnames";
import React from "react";
import {FComponent} from "../../../common/f-component";
import {Header} from "./header";

export class Layout extends FComponent {

    render() {
        const {children, active} = this.props;
        return (
            <div className="layout">
                <Header active={active}/>

                <div className="content">

                </div>

                {children}
            </div>
        );
    }
}
