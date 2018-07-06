import cln from "classnames";
import React from "react";
import {FComponent} from "../../../common/f-component";

export class LeftNav extends FComponent {

    render() {
        const {active} = this.props;
        const sections = [
            {
                label: "Getting started",
                name: "getting-started",
                items: [
                    {
                        label: "Introduction",
                        name: "introduction",
                    }
                ],
            },
        ];

        return (
            <div className="left-nav">
                {sections.map((section) => (
                    <div className={cln("section", {active: section.name === active.section})} key={section.name}>
                        <div className="title">
                            {section.label}
                        </div>

                        {section.name === active.section && (
                            <div className="items">
                                {section.items.map((item) => (
                                    <div className={cln("item", {active: item.name === active.item})} key={item.name}>
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }
}
