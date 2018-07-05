import cln from "classnames";
import React from "react";
import {FComponent} from "../../../common/f-component";
import {Layout} from "../layout/layout";
import {docApi} from "../../../common/api/doc-api";

export class DocsRoute extends FComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            content: null,
        };
        docApi.getDoc().then((content) => this.setState({content}));
    }

    render() {
        const {content} = this.state;

        // console.log(content)

        return (
            <Layout active="docs" className="docs-route">
                {content}
            </Layout>
        );
    }
}
