import cln from "classnames";
import React from "react";
import {FComponent} from "../../../../common/f-component";
import marked from "marked";
import {RegexUtil} from "../../../../common/utils/regex-util";

export class Mdx extends FComponent {

    render() {
        const {template, components} = this.props;

        return parse(template,
            (md) => <div dangerouslySetInnerHTML={{__html: marked(md)}} />,
            (name) => {
                const component = components[name];
                if (component) {
                    return component();
                } else {
                    return `[ERROR] Can't locate component "${name}"`;
                }
            },
        );
    }
}

const parse = (template, withContent, withComponent) => {
    let index = 0;
    let list = [];

    RegexUtil.each(/!!(\w+)/g, template, (match) => {
        if (match.index > index) {
            list.push(withContent(template.substring(index, match.index)));
        }
        list.push(withComponent(match[1]));

        index = match.index + match[0].length;
    });

    if (index < template.length) {
        list.push(withContent(template.substring(index, template.length)));
    }

    return list.map((item, i) => React.createElement(React.Fragment, {key: i}, item))
};