import cln from "classnames";
import React from "react";
import {FComponent} from "../../../common/f-component";
import {O} from "../../../common/utils/object-util";
import {docApi} from "../../../common/api/doc-api";
import {DocsLayout} from "./layout/docs-layout";
import {LeftNav} from "./left-nav";
import {Mdx} from "./mdx/mdx";
import {jsx} from "./mdx-commands/jsx";
import {demo} from "./mdx-commands/demo";

const staticMdxComponents = {
    jsx,
    demo,
};

export class DocsRoute extends FComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            content: null,
            loading: true,
        };
        docApi.getDoc(getDocLocation(props.location.pathname)).then((content) => this.setState({content, loading: false}));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({loading: true});

            docApi.getDoc(getDocLocation(this.props.location.pathname)).then((content) => this.setState({content, loading: false}));
        }
    }

    render() {
        const {content} = this.state;
        const {location} = this.props;
        const docLocation = getDocLocation(location.pathname);

        const mdxComponents = O.map(staticMdxComponents, (f) => f(docLocation));
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
                content={
                    content && (
                        <Mdx
                            template={content}
                            components={mdxComponents}
                        />
                    )
                }
            />
        );
    }
}

const getDocLocation = (pathname) => pathname.replace(/^\/docs/, "");
