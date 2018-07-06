import cln from "classnames";
import React from "react";
import {FComponent} from "../../../../common/f-component";
import {Layout} from "../../layout/layout";

export class DocsLayout extends FComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            expandLeft: false,
        };
    }

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
