import classnames from "classnames";
import {FComponent} from "../common/f-component";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {HomeRoute} from "./routes/home/home-route";

export class PagesApp extends FComponent {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomeRoute}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
