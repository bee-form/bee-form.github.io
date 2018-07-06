import cln from "classnames";
import React from "react";
import {FComponent} from "../../../common/f-component";
import {Layout} from "../layout/layout";

export class DocsLayout extends FComponent {

    render() {
        const {content, leftNav, rightNav, className} = this.props;

        return (
            <Layout active="docs" className="docs-layout">

                <div className="main">
                    <div className="left-panel">
                        {leftNav}
                    </div>
                    <div className={cln("content", className)}>
                        {content}
                    </div>
                    <div className="right-panel">
                        {rightNav}
                    </div>
                </div>
            </Layout>
        );
    }
}
