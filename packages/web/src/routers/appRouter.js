import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import ShowEntries from '../components/showEntries/showEntries';
import test from '../components/login/loginForm';

import NavBar from '../components/nav/navBar'



function AppRouter() {
    return (

        <Router>
            <NavBar/>
            <ShowEntries>
                <Switch>
                    <Route exact  path="/test"  component={test}>
                        <h1>helhelo</h1>
                    </Route>
                </Switch>
            </ShowEntries>
        </Router>

    );
}

export default AppRouter;