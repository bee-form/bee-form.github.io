import cln from "classnames";
import React from "react";
import {FComponent} from "../../../../common/f-component";
import {HighlightJSX} from "../highlight/highlight";
import {Load} from "./load";

export class CollapsedDemo extends FComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showDemo: true,
        };
    }

    render() {
        const {contents, demo} = this.props;
        const {showDemo} = this.state;

        return (
            <div className="collapsed-demo">
                {showDemo ? (
                    <div className="demo">
                        {demo()}
                    </div>
                ) : (
                    <Load
                        api={contents[0].load}
                        render={(content) => (
                            <HighlightJSX code={content}/>
                        )}
                    />
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
