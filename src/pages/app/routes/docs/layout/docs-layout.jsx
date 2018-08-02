import cln from "classnames";
import React from "react";
import {FComponent} from "../../../../common/f-component";
import {Layout} from "../../layout/layout";
import {NavPanel} from "./nav-panel";

export class DocsLayout extends FComponent {
    render() {
        const {content, leftNav, rightNav, className} = this.props;

        return (
            <Layout active="docs" className="docs-layout">

                <NavPanel content={leftNav}/>

                <div className={cln("content", className)}>
                    {content}
                </div>
                <div className="right-panel">
                    {rightNav}
                </div>
            </Layout>
        );
    }
}
