import cln from "classnames";
import React from "react";
import {FComponent} from "../../../common/f-component";
import {Layout} from "../layout/layout";
import {Link} from "react-router-dom";

export class HomeRoute extends FComponent {
    render() {

        return (
            <Layout active="home" className="home-route">

                <div className="intro">

                    <div className="icon">
                        <img src="/assets/bee-icon.png"/>
                    </div>

                    <div className="text-panel">
                        <h1>Bee Form</h1>

                        <p className="description">
                            Build your complicated forms easily and safely.
                        </p>

                        <p className="description">
                            Bee Form provides an enterprise grade Event Bus architecture allowing for asynchronous events
                            to be handled safely and predictably.
                        </p>
                        <p className="description">
                            On top of that is a very simple and intuitive API, no HoC, no render children, just plain JS
                            objects.
                        </p>

                        <div className="buttons">
                            <Link to={"/docs/getting-started/introduction/"} className="button">Get started</Link>
                            <a href="https://github.com/bee-form/bee-form-react" className="button">Download</a>
                        </div>

                    </div>

                </div>
            </Layout>
        );
    }
}
