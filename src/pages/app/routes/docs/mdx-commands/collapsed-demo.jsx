import cln from "classnames";
import React from "react";
import {FComponent} from "../../../../common/f-component";
import {HighlightJSX} from "../highlight/highlight";

export class CollapsedDemo extends FComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showDemo: true,
        };
    }

    render() {
        const {sample} = this.props;
        const {showDemo} = this.state;

        return (
            <div className="collapsed-demo">
                {showDemo ? (
                    <div className="demo">
                        {sample.demo()}
                    </div>
                ) : (
                    <HighlightJSX code={sample.content}/>
                )}

                <div className="toggle" onClick={() => this.setState({showDemo: !showDemo})}>
                    {showDemo ? `Show source code` : `Show demo`}
                </div>

                {!showDemo && (
                    <div className="toggle bottom" onClick={() => this.setState({showDemo: !showDemo})}>
                        {showDemo ? `Show source code` : `Show demo`}
                    </div>
                )}
            </div>
        );
    }
}
