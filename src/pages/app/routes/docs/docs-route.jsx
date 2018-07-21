import cln from "classnames";
import React, {Fragment} from "react";
import {FComponent} from "../../../common/f-component";
import {O} from "../../../common/utils/object-util";
import {docApi} from "../../../common/api/doc-api";
import {DocsLayout} from "./layout/docs-layout";
import {LeftNav} from "./left-nav";
import {parseMdx} from "./mdx/mdx";
import {jsx} from "./mdx-commands/jsx";
import {demo} from "./mdx-commands/demo";
import {code} from "./mdx-commands/code";
import {demoCollapsed} from "./mdx-commands/demo-collapsed";

const staticMdxComponents = {
    jsx,
    demo,
    code,
    "demo-collapsed": demoCollapsed,
};

export class DocsRoute extends FComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            content: null,
            loading: true,
        };

        const docLocation = getDocLocation(props.location.pathname);
        docApi.getDoc(docLocation).then((content) => this.setState({
            content: this.renderContent(content, docLocation),
            loading: false
        }));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({loading: true});

            const docLocation = getDocLocation(this.props.location.pathname);
            docApi.getDoc(docLocation).then((content) => this.setState({
                content: this.renderContent(content, docLocation),
                loading: false
            }));
        }
    }

    renderContent(content, docLocation) {
        const mdxComponents = O.map(staticMdxComponents, (f) => f(docLocation));
        return (
            <Fragment
                key={docLocation}
            >
                {parseMdx(content, mdxComponents)}
            </Fragment>
        );
    }

    render() {
        const {content} = this.state;
        const {location} = this.props;
        const docLocation = getDocLocation(location.pathname);

        return (
            <DocsLayout
                className="docs-route"
                leftNav={
                    <LeftNav
                        active={(() => {
                            const [section, item] = docLocation.split("/").slice(1);
                            return {section, item};
                        })()}
                    />
                }
                content={content}
            />
        );
    }
}

const getDocLocation = (pathname) => pathname.replace(/^\/docs/, "");
