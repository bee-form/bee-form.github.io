import cln from "classnames";
import React from "react";
import {FComponent} from "../../../common/f-component";
import {Link} from "react-router-dom";

export class Header extends FComponent {

    render() {
        const {active} = this.props;

        const leftNavItems = [
            {
                label: "Home",
                name: "home",
                to: "/",
            },
            {
                label: "Documentation",
                name: "documentation",
                to: "/docs/getting-started/introduction/",
            },
            {
                label: "Examples",
                name: "examples",
                href: "https://bee-form.github.io/bee-form-react-demo/",
            },
        ];

        return (
            <div className="header">
                <div className="line">
                    <div className="left">
                        <div className="icon">
                            BF
                        </div>

                        {leftNavItems.map((navItem) => (
                            React.createElement(
                                navItem.to ? Link : "a",
                                {
                                    key: navItem.name,
                                    className: cln("nav-item", {active: active === navItem.name}),
                                    to: navItem.to,
                                    href: navItem.href,
                                },
                                navItem.label
                            )
                        ))}
                    </div>

                    <div className="right">
                        <a href="https://github.com/bee-form" target="_blank">
                            <i className="fab fa-github"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
