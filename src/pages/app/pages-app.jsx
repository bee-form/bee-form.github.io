import {FComponent} from "../common/f-component";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {HomeRoute} from "./routes/home/home-route";
import {DocsRoute} from "./routes/docs/docs-route";

export class PagesApp extends FComponent {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomeRoute}/>
                    <Route exact path='/docs/' component={DocsRoute}/>
                    <Route path='/docs/*' component={DocsRoute}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
