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
                to: "/docs",
            },
        ];

        return (
            <div className="header">
                <div className="line">
                    <div className="left">
                        <div className="icon">
                            Bee Form
                        </div>

                        {leftNavItems.map((navItem) => (
                            <Link
                                className={cln("nav-item", {active: active === navItem.name})}
                                to={navItem.to}
                            >
                                {navItem.label}
                            </Link>
                        ))}

                    </div>

                    <div className="right">

                    </div>
                </div>
            </div>
        );
    }
}
