import cln from "classnames";
import React from "react";
import {FComponent} from "../../../common/f-component";
import {docApi} from "../../../common/api/doc-api";
import {DocsLayout} from "./layout/docs-layout";
import marked from "marked";
import {LeftNav} from "./left-nav";
import {Mdx} from "./mdx/mdx";
import {HighlightJSX} from "./highlight/highlight";

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

        return (
            <DocsLayout
                className="docs-route"
                leftNav={
                    <LeftNav
                        active={(() => {
                            const [section, item] = getDocLocation(location.pathname).split("/").slice(1);
                            return {section, item};
                        })()}
                    />
                }
                content={
                    content && (
                        <Mdx
                            template={content}
                            components={{
                                "jsx": (content) => {

                                    const m1 = /```(.+?)\r?\n/.exec(content);
                                    const start = m1.index + m1[0].length;
                                    const end = content.indexOf("```", start);
                                    return ({
                                        length: end + 3,
                                        jsx: (
                                            <HighlightJSX code={content.substring(start, end)}/>
                                        )
                                    });
                                }
                            }}
                        />
                    )
                }
            />
        );
    }
}

const getDocLocation = (pathname) => pathname.replace(/^\/docs/, "");
