import React from "react";
import {FComponent} from "../../../../common/f-component";
import marked from "marked";

export class Mdx extends FComponent {

    render() {
        const {template, components} = this.props;

        return parse(template,
            (md) => <div dangerouslySetInnerHTML={{__html: marked(md)}} />,
            (name, content, extra) => {
                const component = components[name];
                if (!component) {
                    throw `[ERROR] Can't locate component "${name}"`;
                }

                return component(content, extra.replace(/^\s*:\s*/,"").trim());
            },
        );
    }
}

const parse = (template, withContent, withComponent) => {
    let list = [];

    for (;;) {
        const match = /!!(\w+)(.*?)\r?\n/.exec(template);

        if (!match) {
            break;
        }

        if (match.index > 0) {
            list.push(withContent(template.substring(0, match.index)));
        }
        template = template.substring(match.index + match[0].length);

        const result = withComponent(match[1], template, match[2]);
        list.push(result.jsx);

        template = template.substring(result.length);
    }

    if (template.length) {
        list.push(withContent(template));
    }

    return list.map((item, i) => React.createElement(React.Fragment, {key: i}, item))
};