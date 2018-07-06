import cln from "classnames";
import React from "react";
import {FComponent} from "../../../common/f-component";
import {docApi} from "../../../common/api/doc-api";
import {DocsLayout} from "./docs-layout";
import marked from "marked";
import {LeftNav} from "./left-nav";

export class DocsRoute extends FComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            content: null,
        };
        docApi.getDoc(getDocLocation(props.location.pathname)).then((content) => this.setState({content}));
    }

    render() {
        const {content} = this.state;
        const {location} = this.props;
        content && console.log();
        return (
            <DocsLayout
                leftNav={
                    <LeftNav
                        active={(() => {
                            const [section, item] = getDocLocation(location.pathname).split("/").slice(1);
                            return {section, item};
                        })()}
                    />
                }
                content={
                    content &&
                    <div dangerouslySetInnerHTML={{__html: marked(content)}} />
                }
            />
        );
    }
}

const getDocLocation = (pathname) => pathname.replace(/^\/docs/, "");
