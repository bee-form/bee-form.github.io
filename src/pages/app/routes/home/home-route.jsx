import cln from "classnames";
import React from "react";
import {FComponent} from "../../../common/f-component";
import {Layout} from "../layout/layout";

export class HomeRoute extends FComponent {

    render() {

        return (
            <Layout active="home">
                Pages App
            </Layout>
        );
    }
}
