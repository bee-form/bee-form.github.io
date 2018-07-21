import cln from "classnames";
import React from "react";
import {FComponent} from "../../../../common/f-component";

export class Load extends FComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            content: null,
        };

        props.api().then((content) => this.setState({content}));
    }

    render() {
        const {content} = this.state;
        const {render} = this.props;

        return content && render(content);
    }
}
