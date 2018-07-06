import cln from "classnames";
import React from "react";
import {FComponent} from "../../../common/f-component";
import {Link} from "react-router-dom";

export class LeftNav extends FComponent {

    render() {
        const {active} = this.props;
        const sections = [
            {
                name: "getting-started",
                items: [
                    {
                        name: "introduction",
                    },
                    {
                        name: "features",
                    },
                    {
                        name: "architecture",
                    },
                ],
            },
            {
                label: "API",
                name: "api",
                items: [
                    {
                        label: "createForm()",
                        name: "create-form",
                    },
                    {
                        name: "form-view",
                    },
                ],
            },
        ];

        return (
            <div className="left-nav">
                {sections.map((section) => (
                    <div className={cln("section", {active: section.name === active.section})} key={section.name}>
                        <Link className="title" to={`/docs/${section.name}/${section.items[0].name}/`}>
                            {section.label ? section.label : nameToLabel(section.name)}
                        </Link>

                        {section.name === active.section && (
                            <div className="items">
                                {section.items.map((item) => (
                                    <Link
                                        className={cln("item", {active: item.name === active.item})} key={item.name}
                                        to={`/docs/${section.name}/${item.name}/`}
                                    >
                                        {item.label ? item.label : nameToLabel(item.name)}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }
}

function nameToLabel(name) {
    let label = name.replace(/-/g, " ");
    return label[0].toUpperCase() + label.substring(1);
}
